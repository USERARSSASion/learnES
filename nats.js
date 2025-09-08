import { connect, StringCodec } from "nats";

const connectOption = {
    servers: "115.182.38.4:4222",     //消息队列服务器地址端口
    user:    "ecoflow",                //用户名
    pass:   "ecoflow@cdMuQUnAk3x",                 //密码
    timeout: "20000"                    //连接超时时长
}
const nc = await connect(connectOption);
const sc = StringCodec();

const js = nc.jetstream();

async function process(){
    let msgs = await js.fetch(
        "streamName",       //队列名称
        "consumerName",     //消费者名称
        {
            batch:10,       //每次读取10条
            expires:2000    //超时时间设为2秒
        })
    const done = (async () => {
        for await (const m of msgs){
            let text = sc.decode(m.data)    //解码消息数据
            m.ack()                         //标记处理完毕
        }
    })();
    await done;
    return msgs.received        //实际接收到的消息数目
}
while(true){
    let c = await process()     //循环拉取消息
    //这里可以加入退出循环的逻辑
}
nc.close()              //关闭消息队列连接
await nc.closed()       //等待连接完全关闭后退出

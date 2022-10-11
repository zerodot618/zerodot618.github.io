# 从 0 开始学架构 - 高可用架构模式

## CAP 理论

- c是一致性，写了的数据就该能读到，读请求应该返回最新数据
- a是可用性，有请求就要有反应，非故障接点要给出合理的应答，不过合理不一定是正确的，正确是c的事情
- p是分区容忍，即便分区，系统也要能干活

P要求分布式和数据同步，C要求数据完全一致，A要求返回及时。


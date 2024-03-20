## MySQL

### 1. 慢查询

如何定位慢查询？

1. 方案一：开源工具

   - 调试工具：Arthas
   - 运维工具：Prometheus、Skywalking

2. 方案二：MySQL自带满日志

   ![image-20231229160532627](https://s2.loli.net/2024/03/08/YFwzVjXftAPMenl.png)

如何分析慢SQL语句？

1. 采用`EXPLAIN`或者`DESC`命令获取MySQL如何执行SELECT语句

   ![image-20231230134440074](https://s2.loli.net/2024/03/08/cYrsXDemf5R2hOq.png)

> 如果SQL的type是`index`或者`all`时，就需要优化



### 2. 索引

什么是索引？

索引（index）是帮助MySQL**高效获取**数据的数据结构结构（有序）。在数据之外，数据库系统还维护着满足特定查找算法的数据结构（**B+树**），这些数据以某种方式引用（指向）数据，这样就可以在这些数据结构上实现高级查找算法，这种数据结构就是索引。



B+树和B树的对比

B+Tree是在BTree基础上的一种优化，使其更合适实现外存储索引结构，InnoDB存储引擎就是用B+树实现其索引结构

![image-20231230215211312](https://s2.loli.net/2024/03/08/zqdkH3lEK1sIx96.png)

区别：

1. 磁盘读写代价B+树更低（B+树只在叶子结点存储数据）
2. 查询效率B+树更加稳定
3. B+树便于扫库和区间查询，叶子结点之间是双向链表



聚簇索引与非聚簇索引

![image-20231230215620758](https://s2.loli.net/2024/03/08/Fg1tbIRyZvJm2oC.png)



回表查询

通过二级索引（非聚簇索引）找到对应的主键值，到聚簇索引中查找整行数据，这个过程就是回表



覆盖索引

**覆盖索引**是指查询使用了索引，并且需要返回的列，在该索引中已经能够全部找得到

![image-20231230220950503](https://s2.loli.net/2024/03/08/qh8PXObM1TZpESF.png)



MySQL超大分页处理

在数据量比较大的时候，如果进行limit分页查询，在查询时，越往后，分页查询效率越低

优化思路：一般分页查询时，通过创建**覆盖索引**能够比较好的提升性能，可以通过**覆盖索引**加**子查询**形式进行优化



索引创建原则

![image-20231231124825749](https://s2.loli.net/2024/03/08/dfgbqQK8WjIG235.png)

什么情况下索引会失效？

1. 违反了最左前缀法则
2. 范围查询右边的列
3. 在索引列上进行运算操作
4. 字符串不加单引号（隐式类型转换）
5. 以%开头的Like模糊查询，导致索引失效，仅尾部模糊匹配则不会



SQL优化经验

![image-20231231132223273](https://s2.loli.net/2024/03/08/dLNVpezsJFZy39b.png)

![image-20231231132833872](https://s2.loli.net/2024/03/08/FsubCfwTey576QD.png)

### 3. 事务的特性

![image-20240106214949389](https://s2.loli.net/2024/03/08/7pxDTzMIjthrZGf.png)

并发事务问题

![image-20240106215300844](https://s2.loli.net/2024/03/08/AhMIVRg5XH7m9Yv.png)

怎么解决并发事务问题？

![image-20240106215633463](https://s2.loli.net/2024/03/08/bm5yQ6XCiZhlpJx.png)



undo log和redo log的区别

![image-20240106220024943](https://s2.loli.net/2024/03/08/asDX93xH685w2pl.png)

![image-20240106220654887](https://s2.loli.net/2024/03/08/C76pNsxoEZmukfz.png)

![image-20240106220633733](https://s2.loli.net/2024/03/08/s6aybRHJwPeiBo2.png)

事务中的隔离性是如何保证的？

- 锁：排他锁（如一个事务获取了一行的排他锁，其他事务则不能再获取该行的其他锁）
- MVCC：多版本并发控制

![image-20240106225321916](https://s2.loli.net/2024/03/08/e5sCwhoA3RJVSQZ.png)

解释一下MVCC

![image-20240106221458999](https://s2.loli.net/2024/03/08/vxAqrnGwEZgjd6b.png)

![image-20240106221541964](https://s2.loli.net/2024/03/08/P7FeNd3YWbwlirt.png)

![image-20240106222844693](https://s2.loli.net/2024/03/08/u3tEJMCfkhaiwge.png)

### 4. 主从同步原理

![image-20240106225528664](https://s2.loli.net/2024/03/08/gSYHrxPks96Jmlu.png)

![image-20240106225744605](https://s2.loli.net/2024/03/08/1AfL9EDjpqoycrW.png)
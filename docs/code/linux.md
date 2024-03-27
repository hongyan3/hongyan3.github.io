## Linux基础

### bash特性

#### 命令行展开

```shell
# 循环输出
xiyuan@Macbook-Pro ~ % echo test{1..5}
test1 test2 test3 test4 test5
# 指定步长
xiyuan@Macbook-Pro ~ % echo test{1..10..2}
test1 test3 test5 test7 test9
```

#### 命令别名

```shell
# 查看当前系统命令别名
xiyuan@Macbook-Pro ~ % alias
ll='ls -alF'
run-help=man
which-command=whence
# 添加系统别名
xiyuan@Macbook-Pro ~ % alias rm='rm -i'
xiyuan@Macbook-Pro ~ % alias           
ll='ls -alF'
rm='rm -i'
run-help=man
which-command=whence
# 取消命令别名
xiyuan@Macbook-Pro ~ % unalias rm      
xiyuan@Macbook-Pro ~ % alias     
ll='ls -alF'
run-help=man
which-command=whence
```

#### 命令历史

```shell
# 查看命令历史
xiyuan@Macbook-Pro ~ % history
 # ...
 1009  alias rm='rm -i'
 1010  alias
 1011  unalias rm
 1012  alias
# !行号
# !! 执行上一次命令
```

#### 快捷键

```shell
ctrl + a # 移动到行首
ctrl + e # 移动到行尾
ctrl + u # 删除光标之前的内容
ctrl + k # 删除光标之后的内容
```

#### grep命令

```shell
# 常用命令
grep [option] [pattern] [fileName]
-i 忽略大小写
-v 反转查找
-c 返回匹配行数
-n 显示行号
-o 仅输出匹配部分文本 
```

#### sed命令

```shell
# 常用命令
sed [option] [sed内置字符] [fileName]
-n 取消默认输出，常与p（打印）结合使用
-i 直接将修改结果写入文件
-e 多次编辑，不需要管道符
-r 支持正则扩展
# sed内置字符
a append，对文本追加
d delete，删除匹配行
i insert，在指定行前插入
s/正则/替换内容/g 匹配正则内容，然后替换，g表示全局

# 案例1 输出第2，3行
xiyuan@Macbook-Pro temp % cat -n test.txt 
     1	i am linux
     2	i am windows
     3	i am macos
xiyuan@Macbook-Pro temp % sed -n "2,3p" test.txt 
i am windows
i am macos
# 案例2 匹配包含linux的行
xiyuan@Macbook-Pro temp % sed -n "/linux/p" test.txt 
i am linux
# 案例3 删除包含windows的行
xiyuan@Macbook-Pro temp % sed "/windows/d" test.txt
i am linux
i am macos
# 案例4 将所有的i修改为My
xiyuan@Macbook-Pro temp % sed "s/i /my /g" test.txt
my am linux
my am windows
my am macos
# 案例5 将i替换成I，并且将am替换成Have
xiyuan@Macbook-Pro temp % sed -e "s/i /I /g" -e "s/am/Have/g" test.txt
I Have linux
I Have windows
I Have macos
# 案例6 在第2行后追加一行i am android
xiyuan@Macbook-Pro temp % sed '2a i am android' test.txt 
i am linux
i am windows
i am android
i am macos
```

#### awk命令

```shell
awk [option] 'pattern[action]' file...
```


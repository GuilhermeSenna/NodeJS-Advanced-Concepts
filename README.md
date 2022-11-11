# NodeJS Advanced Concepts

Practice on advanced node topics

---

## 1 - Node internal

- NodeJS and C++
- Process and threads
- V8 & libuv
- NodeJS singlethreading
- libuv multithreading
  - threadpool (4 threads by default)

### loop.js

_Pseudocode to represent Node Event Loop._

### threads.js

_Benchmark changing the number of threads in pbdkf2 function_

![Internal of NodeJS](https://miro.medium.com/max/772/1*YwotUAmN8DvoOygk5RyH3Q.png)

### async.js

_Behavior in async methods (http request)_

### multitask.js

_Benchmark with different methods:_

All Three methods (FS read, Http request, Multiple Hashes (pbkdf2)):

- Request: 338ms
- 1º Hash: 649ms
- FS: 650ms
- 2º Hash: 758ms
- 3º Hash: 816ms

> Http requests is not handled by threadpool but by the OS. Because it runs independently, not depending on other threads, it ends up being processed faster (in this case).

![first benchmark](assets/1-benchmark.png)

Two methods (FS read, Http request):

- FS: 27ms
- Request: 310ms

---

> Summary about node internal

![internal node summary](./assets/Summary-node-internal.png)

---

## 2 - Enhancing Node perfomance

- clustering
  - Cluster manager (cluster lib)
  - Worker Instance (cluster.fork method)
- PM2
  - Cluster management

> Preferably use 1 worker per physical CPU core or 1 worker per logical core (if there are not many CPU intensive tasks).

![Benchmark with clustering](./assets/2-benchmark-w-clustering.PNG)

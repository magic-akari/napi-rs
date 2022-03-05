window.BENCHMARK_DATA = {
  lastUpdate: 1646492964146,
  repoUrl: 'https://github.com/napi-rs/napi-rs',
  entries: {
    Benchmark: [
      {
        commit: {
          author: {
            email: 'lynweklm@gmail.com',
            name: 'LongYinan',
            username: 'Brooooooklyn',
          },
          committer: {
            email: 'lynweklm@gmail.com',
            name: 'LongYinan',
            username: 'Brooooooklyn',
          },
          distinct: true,
          id: 'b48a7578371c7f9353f35a95ca1c965165ac1a39',
          message: 'style: clippy fix',
          timestamp: '2022-03-05T23:05:04+08:00',
          tree_id: 'cceb33b76f82f9c1bbc5a6c16f60f9478068ffcc',
          url: 'https://github.com/napi-rs/napi-rs/commit/b48a7578371c7f9353f35a95ca1c965165ac1a39',
        },
        date: 1646492963033,
        tool: 'benchmarkjs',
        benches: [
          {
            name: 'noop#napi-rs',
            value: 47080091,
            range: '±1.33%',
            unit: 'ops/sec',
            extra: '82 samples',
          },
          {
            name: 'noop#JavaScript',
            value: 790345080,
            range: '±1.54%',
            unit: 'ops/sec',
            extra: '81 samples',
          },
          {
            name: 'Plus number#napi-rs',
            value: 15752601,
            range: '±1.89%',
            unit: 'ops/sec',
            extra: '83 samples',
          },
          {
            name: 'Plus number#JavaScript',
            value: 773323522,
            range: '±1.53%',
            unit: 'ops/sec',
            extra: '82 samples',
          },
          {
            name: 'Create buffer#napi-rs',
            value: 319755,
            range: '±10.62%',
            unit: 'ops/sec',
            extra: '53 samples',
          },
          {
            name: 'Create buffer#JavaScript',
            value: 1480374,
            range: '±7.85%',
            unit: 'ops/sec',
            extra: '74 samples',
          },
          {
            name: 'createArray#createArrayJson',
            value: 35491,
            range: '±1.29%',
            unit: 'ops/sec',
            extra: '83 samples',
          },
          {
            name: 'createArray#create array for loop',
            value: 6585,
            range: '±1.41%',
            unit: 'ops/sec',
            extra: '85 samples',
          },
          {
            name: 'createArray#create array with serde trait',
            value: 6462,
            range: '±1.29%',
            unit: 'ops/sec',
            extra: '85 samples',
          },
          {
            name: 'getArrayFromJs#get array from json string',
            value: 14265,
            range: '±1.55%',
            unit: 'ops/sec',
            extra: '85 samples',
          },
          {
            name: 'getArrayFromJs#get array from serde',
            value: 9058,
            range: '±1.12%',
            unit: 'ops/sec',
            extra: '86 samples',
          },
          {
            name: 'getArrayFromJs#get array with for loop',
            value: 10220,
            range: '±1.38%',
            unit: 'ops/sec',
            extra: '86 samples',
          },
          {
            name: 'Get Set property#Get Set from native#u32',
            value: 356235,
            range: '±5.78%',
            unit: 'ops/sec',
            extra: '69 samples',
          },
          {
            name: 'Get Set property#Get Set from JavaScript#u32',
            value: 319999,
            range: '±5.73%',
            unit: 'ops/sec',
            extra: '71 samples',
          },
          {
            name: 'Get Set property#Get Set from native#string',
            value: 314341,
            range: '±5.91%',
            unit: 'ops/sec',
            extra: '67 samples',
          },
          {
            name: 'Get Set property#Get Set from JavaScript#string',
            value: 294226,
            range: '±5.71%',
            unit: 'ops/sec',
            extra: '69 samples',
          },
          {
            name: 'Async task#spawn task',
            value: 34095,
            range: '±2.3%',
            unit: 'ops/sec',
            extra: '78 samples',
          },
          {
            name: 'Async task#ThreadSafeFunction',
            value: 361,
            range: '±6.55%',
            unit: 'ops/sec',
            extra: '62 samples',
          },
          {
            name: 'Async task#Tokio future to Promise',
            value: 24620,
            range: '±1.93%',
            unit: 'ops/sec',
            extra: '79 samples',
          },
          {
            name: 'Query#query * 100',
            value: 1828,
            range: '±2.15%',
            unit: 'ops/sec',
            extra: '79 samples',
          },
          {
            name: 'Query#query * 1',
            value: 21725,
            range: '±2.25%',
            unit: 'ops/sec',
            extra: '76 samples',
          },
        ],
      },
    ],
  },
}

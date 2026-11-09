# AI Log Analyzer

Scan a deterministic million-event workload and isolate the injected detection.

[Run the portfolio demo](https://shassanahmed.space/cyber-labs/ai-log-analyzer/)

## Reproduce the result

Open `index.html` in a modern browser or run `node test.mjs` with Node.js 20+. The demo accepts editable JSON and exports evidence. The sample input is in `fixture.json`.

## Sample evidence

```json
{
  "scanned": 1000000,
  "count": 1,
  "findings": [
    {
      "index": 824139,
      "path": "/etc/passwd",
      "rule": "sensitive-path-access"
    }
  ]
}
```

## Scope

Synthetic workload with a single injected indicator. Runtime varies by device. The workflow currently uses rules or templates and has no model integration.

## What this demonstrates

**Demonstrate bounded log processing and reproducible detections.** The positive fixture scans one million generated events and returns the injected event index. The control removes the injection. Treat elapsed time as a local observation. The test does not measure SIEM ingestion or production throughput.

[Reference guidance](https://sigmahq.io/docs/basics/rules.html)

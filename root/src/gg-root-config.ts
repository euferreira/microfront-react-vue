import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@gg/navbar",
  app: () => System.import<LifeCycles>("@gg/navbar"),
  activeWhen: () => true,
});

registerApplication({
  name: "@gg/app1",
  app: () => System.import<LifeCycles>("@gg/app1"),
  activeWhen: ["/app1"]
});

registerApplication({
  name: "@gg/app2",
  app: () => System.import<LifeCycles>("@gg/app2"),
  activeWhen: ["/app2"],
});

start({
  urlRerouteOnly: true,
});

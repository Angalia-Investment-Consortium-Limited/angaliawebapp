var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// ../../../sites/common_site_config.json
var require_common_site_config = __commonJS({
  "../../../sites/common_site_config.json"(exports, module) {
    module.exports = {
      background_workers: 1,
      dns_multitenant: true,
      developer_mode: 1,
      ignore_csrf: 1,
      file_watcher_port: 6787,
      frappe_types_pause_generation: 0,
      frappe_user: "aicl",
      gunicorn_workers: 5,
      live_reload: true,
      rebase_on_pull: false,
      redis_cache: "redis://127.0.0.1:13000",
      redis_queue: "redis://127.0.0.1:11000",
      redis_socketio: "redis://127.0.0.1:13000",
      restart_supervisor_on_update: true,
      restart_systemd_on_update: false,
      serve_default_site: true,
      shallow_clone: true,
      socketio_port: 9e3,
      use_redis_auth: false,
      webserver_port: 8e3
    };
  }
});

// vite.config.js
import path from "path";
import { defineConfig } from "file:///home/aicl/frappe-bench/apps/angaliawebapp/landing/node_modules/vite/dist/node/index.js";
import react from "file:///home/aicl/frappe-bench/apps/angaliawebapp/landing/node_modules/@vitejs/plugin-react/dist/index.mjs";

// proxyOptions.js
var common_site_config = require_common_site_config();
var { webserver_port } = common_site_config;
var proxyOptions_default = {
  "^/(app|api|assets|files|private)": {
    target: `http://127.0.0.1:${webserver_port}`,
    ws: true,
    router: function(req) {
      const site_name = req.headers.host.split(":")[0];
      return `http://${site_name}:${webserver_port}`;
    }
  }
};

// vite.config.js
var __vite_injected_original_dirname = "/home/aicl/frappe-bench/apps/angaliawebapp/landing";
var vite_config_default = defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
    proxy: proxyOptions_default
  },
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "src")
    }
  },
  build: {
    outDir: "../angaliawebapp/public/landing",
    emptyOutDir: true,
    target: "es2015"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vc2l0ZXMvY29tbW9uX3NpdGVfY29uZmlnLmpzb24iLCAidml0ZS5jb25maWcuanMiLCAicHJveHlPcHRpb25zLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG4gXCJiYWNrZ3JvdW5kX3dvcmtlcnNcIjogMSxcbiBcImRuc19tdWx0aXRlbmFudFwiOiB0cnVlLFxuIFwiZGV2ZWxvcGVyX21vZGVcIjogMSxcbiBcImlnbm9yZV9jc3JmXCI6IDEsXG4gXCJmaWxlX3dhdGNoZXJfcG9ydFwiOiA2Nzg3LFxuIFwiZnJhcHBlX3R5cGVzX3BhdXNlX2dlbmVyYXRpb25cIjogMCxcbiBcImZyYXBwZV91c2VyXCI6IFwiYWljbFwiLFxuIFwiZ3VuaWNvcm5fd29ya2Vyc1wiOiA1LFxuIFwibGl2ZV9yZWxvYWRcIjogdHJ1ZSxcbiBcInJlYmFzZV9vbl9wdWxsXCI6IGZhbHNlLFxuIFwicmVkaXNfY2FjaGVcIjogXCJyZWRpczovLzEyNy4wLjAuMToxMzAwMFwiLFxuIFwicmVkaXNfcXVldWVcIjogXCJyZWRpczovLzEyNy4wLjAuMToxMTAwMFwiLFxuIFwicmVkaXNfc29ja2V0aW9cIjogXCJyZWRpczovLzEyNy4wLjAuMToxMzAwMFwiLFxuIFwicmVzdGFydF9zdXBlcnZpc29yX29uX3VwZGF0ZVwiOiB0cnVlLFxuIFwicmVzdGFydF9zeXN0ZW1kX29uX3VwZGF0ZVwiOiBmYWxzZSxcbiBcInNlcnZlX2RlZmF1bHRfc2l0ZVwiOiB0cnVlLFxuIFwic2hhbGxvd19jbG9uZVwiOiB0cnVlLFxuIFwic29ja2V0aW9fcG9ydFwiOiA5MDAwLFxuIFwidXNlX3JlZGlzX2F1dGhcIjogZmFsc2UsXG4gXCJ3ZWJzZXJ2ZXJfcG9ydFwiOiA4MDAwXG59IiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9haWNsL2ZyYXBwZS1iZW5jaC9hcHBzL2FuZ2FsaWF3ZWJhcHAvbGFuZGluZ1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvYWljbC9mcmFwcGUtYmVuY2gvYXBwcy9hbmdhbGlhd2ViYXBwL2xhbmRpbmcvdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvYWljbC9mcmFwcGUtYmVuY2gvYXBwcy9hbmdhbGlhd2ViYXBwL2xhbmRpbmcvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuaW1wb3J0IHByb3h5T3B0aW9ucyBmcm9tICcuL3Byb3h5T3B0aW9ucyc7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuXHRwbHVnaW5zOiBbcmVhY3QoKV0sXG5cdHNlcnZlcjoge1xuXHRcdHBvcnQ6IDgwODAsXG5cdFx0cHJveHk6IHByb3h5T3B0aW9uc1xuXHR9LFxuXHRyZXNvbHZlOiB7XG5cdFx0YWxpYXM6IHtcblx0XHRcdCdAJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpXG5cdFx0fVxuXHR9LFxuXHRidWlsZDoge1xuXHRcdG91dERpcjogJy4uL2FuZ2FsaWF3ZWJhcHAvcHVibGljL2xhbmRpbmcnLFxuXHRcdGVtcHR5T3V0RGlyOiB0cnVlLFxuXHRcdHRhcmdldDogJ2VzMjAxNScsXG5cdH0sXG59KTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvYWljbC9mcmFwcGUtYmVuY2gvYXBwcy9hbmdhbGlhd2ViYXBwL2xhbmRpbmdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL2FpY2wvZnJhcHBlLWJlbmNoL2FwcHMvYW5nYWxpYXdlYmFwcC9sYW5kaW5nL3Byb3h5T3B0aW9ucy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9haWNsL2ZyYXBwZS1iZW5jaC9hcHBzL2FuZ2FsaWF3ZWJhcHAvbGFuZGluZy9wcm94eU9wdGlvbnMuanNcIjtjb25zdCBjb21tb25fc2l0ZV9jb25maWcgPSByZXF1aXJlKCcuLi8uLi8uLi9zaXRlcy9jb21tb25fc2l0ZV9jb25maWcuanNvbicpO1xuY29uc3QgeyB3ZWJzZXJ2ZXJfcG9ydCB9ID0gY29tbW9uX3NpdGVfY29uZmlnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdCdeLyhhcHB8YXBpfGFzc2V0c3xmaWxlc3xwcml2YXRlKSc6IHtcblx0XHR0YXJnZXQ6IGBodHRwOi8vMTI3LjAuMC4xOiR7d2Vic2VydmVyX3BvcnR9YCxcblx0XHR3czogdHJ1ZSxcblx0XHRyb3V0ZXI6IGZ1bmN0aW9uKHJlcSkge1xuXHRcdFx0Y29uc3Qgc2l0ZV9uYW1lID0gcmVxLmhlYWRlcnMuaG9zdC5zcGxpdCgnOicpWzBdO1xuXHRcdFx0cmV0dXJuIGBodHRwOi8vJHtzaXRlX25hbWV9OiR7d2Vic2VydmVyX3BvcnR9YDtcblx0XHR9XG5cdH1cbn07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUNDLG9CQUFzQjtBQUFBLE1BQ3RCLGlCQUFtQjtBQUFBLE1BQ25CLGdCQUFrQjtBQUFBLE1BQ2xCLGFBQWU7QUFBQSxNQUNmLG1CQUFxQjtBQUFBLE1BQ3JCLCtCQUFpQztBQUFBLE1BQ2pDLGFBQWU7QUFBQSxNQUNmLGtCQUFvQjtBQUFBLE1BQ3BCLGFBQWU7QUFBQSxNQUNmLGdCQUFrQjtBQUFBLE1BQ2xCLGFBQWU7QUFBQSxNQUNmLGFBQWU7QUFBQSxNQUNmLGdCQUFrQjtBQUFBLE1BQ2xCLDhCQUFnQztBQUFBLE1BQ2hDLDJCQUE2QjtBQUFBLE1BQzdCLG9CQUFzQjtBQUFBLE1BQ3RCLGVBQWlCO0FBQUEsTUFDakIsZUFBaUI7QUFBQSxNQUNqQixnQkFBa0I7QUFBQSxNQUNsQixnQkFBa0I7QUFBQSxJQUNuQjtBQUFBO0FBQUE7OztBQ3JCd1UsT0FBTyxVQUFVO0FBQ3pWLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sV0FBVzs7O0FDRndULElBQU0scUJBQXFCO0FBQ3JXLElBQU0sRUFBRSxlQUFlLElBQUk7QUFFM0IsSUFBTyx1QkFBUTtBQUFBLEVBQ2Qsb0NBQW9DO0FBQUEsSUFDbkMsUUFBUSxvQkFBb0IsY0FBYztBQUFBLElBQzFDLElBQUk7QUFBQSxJQUNKLFFBQVEsU0FBUyxLQUFLO0FBQ3JCLFlBQU0sWUFBWSxJQUFJLFFBQVEsS0FBSyxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQy9DLGFBQU8sVUFBVSxTQUFTLElBQUksY0FBYztBQUFBLElBQzdDO0FBQUEsRUFDRDtBQUNEOzs7QURaQSxJQUFNLG1DQUFtQztBQU16QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMzQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsUUFBUTtBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLEVBQ1I7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNSLE9BQU87QUFBQSxNQUNOLEtBQUssS0FBSyxRQUFRLGtDQUFXLEtBQUs7QUFBQSxJQUNuQztBQUFBLEVBQ0Q7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLGFBQWE7QUFBQSxJQUNiLFFBQVE7QUFBQSxFQUNUO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K

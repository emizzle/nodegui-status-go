var ffi = require("ffi-napi");

export function signMessage(message: string) {
  var libstatus = ffi.Library("../modules/status-go/libstatus", {
    HashMessage: ["string", ["string"]],
  });
  var s = new Buffer(7);
  s.fill(0);
  s.write(message, 0, "utf-8");
  return libstatus.HashMessage(s);
}

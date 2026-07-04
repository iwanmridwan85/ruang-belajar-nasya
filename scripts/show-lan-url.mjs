import os from "node:os";

const PORT = 3300;
const nets = os.networkInterfaces();
const ips = [];
for (const name of Object.keys(nets)) {
  for (const net of nets[name] || []) {
    if (net.family === "IPv4" && !net.internal) ips.push(net.address);
  }
}

console.log("\n📚  Ruang Belajar — alamat untuk dibuka di HP anak:\n");
if (ips.length === 0) {
  console.log("   (Tidak menemukan alamat WiFi. Pastikan Mac terhubung WiFi.)");
} else {
  for (const ip of ips) console.log(`   →  http://${ip}:${PORT}`);
}
console.log(`\n   Di Mac ini bisa juga buka:  http://localhost:${PORT}\n`);
console.log("   Pastikan HP & Mac tersambung ke WiFi yang SAMA.\n");

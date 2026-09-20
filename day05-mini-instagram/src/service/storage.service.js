const { ImageKit } = require("@imagekit/nodejs");

const imagekit = new ImageKit({
  privateKey: "private_xBViwKSjsMzPHWsb4jbOUs1oAtA=",
});

async function uploadFile(buffer) {
  console.log(buffer);
  const result = await imagekit.client.upload({
    file: buffer.toString("base64"),
    fileName: "image.png",
  });
  return result;
}

module.exports = uploadFile;

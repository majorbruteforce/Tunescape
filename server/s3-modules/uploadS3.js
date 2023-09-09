require("dotenv").config();
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const { randomBytes } = require("crypto");

const bucketName = process.env.AWS_BUCKET_NAME;
const bucketRegion = process.env.AWS_BUCKET_REGION;
const accessKey = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

const s3 = new S3Client({
  credentials: {
    accessKeyId: accessKey,
    secretAccessKey: secretAccessKey,
  },
  region: bucketRegion,
});

function generateRandomHash() {
  const rawBytes = randomBytes(16);
  const hash = rawBytes.toString("hex");
  return hash;
}

async function uploadToS3(file) {
  try {
    const uniquehash = generateRandomHash();
    const params = {
      Bucket: bucketName,
      Key: uniquehash,
      Body: file.buffer,
      ContentType: file.mimetype,
    };
    const command = new PutObjectCommand(params);
    await s3.send(command);
    console.log(`${file.mimetype} file ${params.Key} was uploaded`);
    return params.Key;
  } catch (err) {
    console.log("S3 error: ", err.message);
  }
}

module.exports = {
  uploadToS3,
};

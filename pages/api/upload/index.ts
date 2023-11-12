import { NextApiHandler, NextApiRequest } from "next";
import formidable from "formidable";
import path from "path";
import fs from "fs/promises";

export const config = {
  api: {
    bodyParser: false,
  },
};

const readFile = (
  req: NextApiRequest
): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
  const options: formidable.Options = {};
  options.uploadDir = path.join(process.cwd(), "/public/images/upload/");
  options.filename = (name, ext, path, form) => {
    return Date.now().toString() + "_" + path.originalFilename;
  };

  options.maxFileSize = 4000 * 1024 * 1024;
  const form = formidable(options);

  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });
};

const handler: NextApiHandler = async (req, res) => {
  try {
    await fs.readdir(path.join(process.cwd() + "/public", "/images/upload"));
  } catch (error) {
    await fs.mkdir(path.join(process.cwd() + "/public", "/images/upload"));
  }
  await readFile(req);
  res.json({ ok: true });
};

export default handler;

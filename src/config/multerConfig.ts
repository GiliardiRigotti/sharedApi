import multer from "multer";
// biome-ignore lint/style/useNodejsImportProtocol: <explanation>
import path from "path";

export const storage = multer.diskStorage({
	destination: (req, file, callback) => {
		callback(null, path.resolve("uploads"));
	},
	filename: (req, file, callback) => {
		const time = new Date().getTime();
		const filenameSplit = file.originalname.split(".");
		const ext = filenameSplit[filenameSplit.length - 1];
		callback(null, `${time}_file.${ext}`);
	},
});

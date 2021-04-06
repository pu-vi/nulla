import crypto from "crypto";

export const getUid = () => crypto.randomBytes(20).toString("hex");

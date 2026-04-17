import fs from "fs/promises";
import path from "path";

export const getFriends = async () => {
    const filePath = path.join(process.cwd(), "public/api/friends.json");

    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
};
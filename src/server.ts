import "./config/env.config";
import app from "./app";
import { startCronJobs } from "./service/cron-job.service";
import { connectDB } from "./db/mongodb";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();
  // startCronJobs();
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
};

startServer();

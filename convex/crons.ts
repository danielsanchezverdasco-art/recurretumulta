import { cronJobs } from "convex/server";
import { internal } from "./_generated/api";

const crons = cronJobs();

// 18/10/2026: purga de límites diarios y deduplicación de visitas de la audiencia.
crons.hourly("purgar audiencia", { minuteUTC: 17 }, internal.audiencia.purgar, {});

export default crons;

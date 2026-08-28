import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const contactEnquiries = pgTable("contact_enquiries", {
  id: serial("id").primaryKey(),
  fullName: varchar("full_name", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 50 }).notNull(),
  email: varchar("email", { length: 255 }),
  organization: varchar("organization", { length: 255 }),
  enquiryType: varchar("enquiry_type", { length: 100 }).notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

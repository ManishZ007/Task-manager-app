import { CollectionConfig } from "payload/types";

export const Users: CollectionConfig = {
  slug: "users",
  auth: {},
  access: {
    read: () => true,
    create: () => true,
  },

  fields: [
    {
      name: "role",
      required: true,
      defaultValue: "user",
      type: "select",
      options: [
        {
          label: "User",
          value: "user",
        },

        {
          label: "Admin",
          value: "admin",
        },
      ],
    },
    {
      name: "username",
      type: "text",
      required: true,
    },
  ],
};

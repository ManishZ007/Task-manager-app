import { CollectionConfig } from "payload/types";

export const Tasks: CollectionConfig = {
  slug: "tasks",
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
  },

  fields: [
    {
      name: "title",
      required: true,
      type: "text",
    },
    {
      name: "description",
      type: "text",
    },
    {
      name: "todos",
      type: "array",
      fields: [
        {
          name: "todo_title",
          type: "text",
        },
        {
          name: "todo_description",
          type: "text",
        },
        {
          name: "todo_marking",
          type: "select",
          defaultValue: "green",
          options: [
            {
              label: "Red",
              value: "red",
            },
            {
              label: "Green",
              value: "green",
            },
            {
              label: "Yellow",
              value: "yellow",
            },
          ],
        },
        {
          name: "todo_reminder",
          type: "date",
          admin: {
            date: {
              pickerAppearance: "timeOnly",
              displayFormat: "h:mm:ss a",
            },
          },
        },
      ],
    },
  ],
};

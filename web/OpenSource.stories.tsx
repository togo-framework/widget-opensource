import type { Meta, StoryObj } from "@storybook/react";
import { OpenSource } from "./index";

const meta = { title: "Widgets/OpenSource", component: OpenSource } satisfies Meta<typeof OpenSource>;
export default meta;

export const Default: StoryObj<typeof OpenSource> = {
  args: { settings: {}, setSettings: () => {}, editing: false },
};

export const Editing: StoryObj<typeof OpenSource> = {
  args: { settings: {}, setSettings: () => {}, editing: true },
};

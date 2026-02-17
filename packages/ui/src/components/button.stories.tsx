import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
	title: "Components/Button",
	component: Button,
	argTypes: {
		variant: {
			control: "select",
			options: ["default", "secondary", "destructive", "outline", "ghost", "link"],
		},
		size: {
			control: "select",
			options: ["default", "xs", "sm", "lg", "icon", "icon-xs", "icon-sm", "icon-lg"],
		},
	},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
	args: {
		children: "Button",
	},
};

export const Secondary: Story = {
	args: {
		variant: "secondary",
		children: "Secondary",
	},
};

export const Destructive: Story = {
	args: {
		variant: "destructive",
		children: "Destructive",
	},
};

export const Outline: Story = {
	args: {
		variant: "outline",
		children: "Outline",
	},
};

export const Ghost: Story = {
	args: {
		variant: "ghost",
		children: "Ghost",
	},
};

export const Link: Story = {
	args: {
		variant: "link",
		children: "Link",
	},
};

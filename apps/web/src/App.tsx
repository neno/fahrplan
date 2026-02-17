import { Button } from "@repo/ui";

export function App() {
	return (
		<div className="min-h-screen bg-background text-foreground">
			<header className="border-b border-border px-4 py-4">
				<h1 className="text-2xl font-bold text-primary">Fahrplan</h1>
				<p className="text-muted-foreground">Lake Thun & Lake Brienz Boat Schedules</p>
			</header>
			<main className="mx-auto max-w-2xl p-4">
				<Button>Search Connections</Button>
			</main>
		</div>
	);
}

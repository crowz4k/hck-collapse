# HN Collapse All Comments

A Chrome extension that collapses all comments on Hacker News story pages with a single click.

## Features

- One-click collapse of all expanded comments on any HN discussion page
- Works on `news.ycombinator.com/item` pages
- Lightweight — no external dependencies, no data collection

## Installation

1. Clone or download this repository
2. Open `chrome://extensions/` in Chrome
3. Enable **Developer mode** (top right)
4. Click **Load unpacked** and select the project folder

## Usage

Navigate to any Hacker News comment thread and click the extension icon in the toolbar. All expanded comments will be collapsed.

## How It Works

The extension listens for a click on its toolbar icon, then injects a content script that finds all expanded comment toggle links (class `togg` with the `–` character) and clicks them to collapse.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

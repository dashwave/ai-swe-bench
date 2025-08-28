# AISWE Bench

AI Software Engineering Agent Benchmarking platform evaluating real-world performance on open source GitHub issues through automated PR generation and assessment.

## Overview

AISWE Bench is a benchmarking platform that evaluates AI software engineering agents by testing their ability to solve real-world GitHub issues through automated pull request generation. The platform provides comprehensive metrics and comparisons between different AI agents.

## Features

- **Real-world Evaluation**: Tests AI agents on actual open source GitHub issues
- **Automated PR Generation**: Agents create pull requests to solve issues
- **Comprehensive Metrics**: Success rates, response times, code quality scores
- **Agent Comparison**: Side-by-side comparison of different AI agents
- **Academic Design**: Clean, minimal interface inspired by academic research sites

## Current Agents

- **Dashwave** - AI-powered software engineering agent (Sponsored)
- **Google Jules** - Google's AI coding assistant

## Technology Stack

- **Frontend**: React.js 18
- **Styling**: CSS3 with academic design principles
- **Fonts**: Inter (UI) and JetBrains Mono (code)
- **Deployment**: Ready for hosting on bench.aiswe.dev

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd aiswe-bench
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files ready for deployment.

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.js       # Navigation header
│   ├── Hero.js         # Hero section
│   ├── BenchmarkSection.js # Main benchmark comparison
│   └── Footer.js       # Footer with links
├── App.js              # Main app component
├── App.css             # App-specific styles
├── index.js            # React entry point
└── index.css           # Global styles
```

## Design Principles

The site follows academic design principles inspired by research platforms like Epoch AI and personal academic sites:

- **Minimal Typography**: Clean, readable fonts (Inter for UI, JetBrains Mono for code)
- **Neutral Color Palette**: Subtle grays and blues with high contrast
- **Academic Layout**: Structured, research-focused presentation
- **Responsive Design**: Works across all device sizes
- **Accessibility**: High contrast and readable text

## Benchmarking Methodology

1. **Issue Selection**: Real GitHub issues from open source projects
2. **Agent Processing**: AI agents analyze issues and generate solutions
3. **PR Creation**: Automated pull request generation
4. **Evaluation**: Assessment of code quality, correctness, and completeness
5. **Scoring**: Comprehensive metrics and comparison

## Sponsorship

This project is sponsored by [Dashwave](https://dashwave.com), which is reflected in the design and presentation of benchmark results.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

- Email: contact@aiswe.dev
- GitHub: [aiswe-bench](https://github.com/aiswe-bench)

## Deployment

The site is designed to be hosted at `bench.aiswe.dev`. The build output is optimized for production deployment on any static hosting service.

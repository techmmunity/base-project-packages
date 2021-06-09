module.exports = {
	moduleFileExtensions: ["js", "json", "ts"],
	rootDir: "src",
	testRegex: ".*\\.spec\\.ts$",
	transform: {
		"^.+\\.(tsx|ts|jsx|js)$": "ts-jest",
	},
	collectCoverageFrom: ["**/*.ts"],
	//setupFiles: ["./v1/tests/setup.ts"],
	coverageDirectory: "../coverage",
	testEnvironment: "node",
	moduleDirectories: ["node_modules", "src"],
	resetMocks: true,
/* 	coverageThreshold: {
		global: {
		branches: 100,
		functions: 100,
		lines: 100,
		statements: 100,
		},
	}, */
};

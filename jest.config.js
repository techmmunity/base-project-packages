module.exports = {
	moduleFileExtensions: ["js", "json", "ts"],
	rootDir: "src",
	testRegex: ".*\\.spec\\.ts$",
	transform: {
		"^.+\\.(t|j)s$": "ts-jest",
	},
	collectCoverageFrom: ["**/*.ts"],
	// SetupFiles: ["./v1/tests/setup.ts"],
	coverageDirectory: "../coverage",
	testEnvironment: "node",
	moduleDirectories: ["node_modules", "src"],
	resetMocks: true,
	/*
	 * CoverageThreshold: {
	 * 	global: {
	 * 		branches: 100,
	 * 		functions: 100,
	 * 		lines: 100,
	 * 		statements: 100,
	 * 	},
	 * },
	 */
};

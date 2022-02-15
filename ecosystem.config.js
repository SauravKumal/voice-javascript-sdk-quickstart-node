module.exports = {
    apps: [{
        name: "test-client",
        script: "./index.js",
        env_development: {
            NODE_ENV: "development",
            PORT: 3001
        }
    }]
}

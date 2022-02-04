module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  mode: process.env.NODE_ENV ? 'jit' : undefined,
}

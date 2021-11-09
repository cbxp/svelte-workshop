process.env.NODE_ENV = 'test';

module.exports = {
  testsFinishTimeout: 10000,
  // manual: true,
  // open: true,
  plugins: [require('@snowpack/web-test-runner-plugin')()],
  testRunnerHtml: testFramework =>
    `<html>
      <body>
        <script type="module" src="/dist/setup-tests.js"></script>
        <script type="module" src="${testFramework}"></script>
      </body>
    </html>`
}

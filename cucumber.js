const path = require("path");

module.exports = {
  default: {
    requireModule: ["ts-node/register"],
    require: ['features/step_definitions/*.ts'],
    format: ["progress-bar", "html:cucumber-report.html"],
    "ts-node": {
      project: "tsconfig.json",
    },
  },
};

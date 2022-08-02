module.exports =  {
    "env": {
      "browser": true,
      "es2021": true,
      'commonjs':true,
    },
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended"
    ],
    "parserOptions": {
      "ecmaFeatures": {
        "jsx": true
      },
      "ecmaVersion": "latest",
      "sourceType": "module"
    },
    "plugins": [
      "react"
    ],
    "rules": {
      "indent":["error",2],
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off"
    }
}
  
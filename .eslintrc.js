// .eslintrc 파일
{
  "extends": [
    "naver",
    "plugin:flowtype/recommended",
    "plugin:jsx-control-statements/recommended",
    "prettier"
  ],
  "plugins": ["react", "react-native", "flowtype", "jsx-control-statements"],
  "rules": {
    // 프로젝트별 적용할 Rules
    "max-len": ["error", 120],
    "no-console": "off",
    "no-unused-vars": "warn",
    "newline-after-var": "off",
    "no-trailing-spaces": "off",
    "class-methods-use-this": "off",
    "no-useless-constructor": "off",
    "no-mixed-spaces-and-tabs": "off",
    "padding-line-between-statements": ["off"],
    "array-element-newline": "off",
    "comma-dangle": "off",
    "consistent-return": ["off"],
    "no-use-before-define": "off",
    // 정의되기 전에 사용되면 에러 => styles 맨 밑에 정의하기 때문에
    "spaced-comment": "off",
    // 주석 앞뒤에 공백이 있어야 한다 => hoon 이주석을 많이 달아서 제외
    "array-bracket-newline": "off",
    // array 여러 라인일때는 [ ] 앞뒤에 엔터가 있어야 함
    "react-native/no-unused-styles": "warn",
    "react-native/split-platform-components": "warn",
    "react-native/no-inline-styles": "off",
    "react-native/no-color-literals": "off",
    "react/jsx-uses-vars": "error",
    "react/jsx-uses-react": "error",
    "jsx-control-statements/jsx-choose-not-empty": 1,
    "jsx-control-statements/jsx-for-require-each": 1,
    "jsx-control-statements/jsx-for-require-of": 1,
    "jsx-control-statements/jsx-if-require-condition": 1,
    "jsx-control-statements/jsx-otherwise-once-last": 1,
    "jsx-control-statements/jsx-use-if-tag": 1,
    "jsx-control-statements/jsx-when-require-condition": 1,
    "jsx-control-statements/jsx-jcs-no-undef": 1,
    "no-undef": 0, // Replace this with jsx-jcs-no-undef
    "react/jsx-no-undef": [2, { "allowGlobals": true }]
  },
  "parserOptions": {
    "ecmaVersion": 8,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "modules": true,
      "experimentalObjectRestSpread": true
    }
  },
  "env": {
    "es6": true,
    "node": true,
    "jsx-control-statements/jsx-control-statements": true
  },
  "globals": {
    "__DEV__": true,
    "DEV": true,
    "PROD": true,
    "LOG": true,
    "T": true,
    "GO": true,
    "GOF": true,
    "POP": true,
    "POPF": true,
    "LINK": true,
    "LOTTIE": true,
    "ANIMATABLE": true,
    "ALERT": true,
    "ALERT2": true,
    "IOS": true,
    "ANDROID": true,
    "SENTRY": true,
    "ERROR": true,
    "WRAN": true,
    "DISPATCH": true,
    "width": true,
    "height": true,
    "If": true,
    "For": true
  }
}

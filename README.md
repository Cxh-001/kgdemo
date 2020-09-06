This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

### RE_tag实体识别
使用RE_tag进行实体识别，训练了20个epoch，F1值为0.7698

| type | 预测正确的type实体数 | 预测结果中的type实体数 | 真正的type实体数 | precision | recall |  F1 |
|----------|-----|----|----|-----|----|----|
|  国家   | 420   |  573   |  528      |  0.733   |  0.795   |     0.763   |
|  代号名   | 10   |  14   |  20      |  0.714   |  0.500   |     0.588   |
|  时间   | 56   |  86   |  78      |  0.651   |  0.718   |     0.683   |
|  学历   | 1   |  2   |  4      |  0.500   |  0.250   |     0.333   |
|  人物   | 772   |  815   |  801      |  0.947   |  0.964   |     0.955   |
|  数值   | 37   |  60   |  58      |  0.617   |  0.638   |     0.627   |
|  舰艇舷号   | 16   |  21   |  19      |  0.762   |  0.842   |     0.800   |
|  日期   | 2   |  2   |  3      |  1.000   |  0.667   |     0.800   |
|  军衔   | 17   |  23   |  20      |  0.739   |  0.850   |     0.791   |
|  组织机构   | 1052   |  1400   |  1551      |  0.751   |  0.678   |     0.713   |
|  领域   | 5   |  9   |  18      |  0.556   |  0.278   |     0.370   |
|  地点   | 108   |  192   |  173      |  0.562   |  0.624   |     0.592   |
|  武器装备   | 631   |  881   |  783      |  0.716   |  0.806   |     0.758   |
|  奖项   | 2   |  2   |  2      |  1.000   |  1.000   |     1.000   |
|  职位   | 529   |  716   |  649      |  0.739   |  0.815   |     0.775   |

| 实体类型1    | 实体类型2      | 冲突次数 |
|------------|--------------|----------|
|  POS  |ORG  |763  |
|  ORG  |ORG  |867  |
|  CON  |POS  |59  |
|  ORG  |POS  |1171  |
|  ORG  |CON  |924  |
|  ORG  |LOC  |400  |
|  LOC  |ORG  |22  |
|  CON  |LOC  |10  |
|  POS  |CON  |26  |
|  CON  |ORG  |165  |
|  ARM  |CON  |8  |
|  ARM  |ARM  |123  |
|  ARM  |NAME  |17  |
|  CON  |ARM  |3  |
|  AREA  |POS  |10  |
|  POS  |ARM  |2  |
|  POS  |LOC  |5  |
|  CON  |CON  |3  |
|  ARM  |SHIP  |3  |
|  LOC  |LOC  |8  |
|  POS  |AREA  |5  |
|  ARM  |POS  |2  |
|  LOC  |POS  |5  |
|  POS  |POS  |1  |
|  ARM  |ORG  |9  |
|  POS  |PER  |1  |
|  RANK  |POS  |1  |
|  PER  |POS  |1  |
|  PER  |RANK  |1  |
|  ORG  |PER  |3  |
|  AREA  |ORG  |1  |

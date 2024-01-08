import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    Mesh,
    BoxGeometry,
    MeshBasicMaterial,
    Color,
} from "three";

// 获取canvas 元素
const container = document.querySelector("#scene-container");
// 创建场景
const scene = new Scene();
// 设置场景颜色
scene.background = new Color("skyblue");
// 创建相机
const fov = 35; // AKA Field of View
const aspect = container.clientWidth / container.clientHeight;
const near = 0.1; // the near clipping plane
const far = 100; // the far clipping plane
const camera = new PerspectiveCamera(fov, aspect, near, far);
camera.position.set(0, 0, 10);
// 创建渲染器
const render = new WebGLRenderer();
// 创建网格（用于显示3d对象）
//geometry 定义物体的结构
const geometry = new BoxGeometry(2, 2, 2);
// 创建材质 MeshBasicMaterial： 基础网格材质，不受灯光影响，简单着色一般用来绘制几何体
const material = new MeshBasicMaterial();
// 创建网格对象
const cube = new Mesh(geometry, material);
// 将网格添加到场景中
scene.add(cube);
// 设置渲染器的大小
render.setSize(container.clientWidth, container.clientHeight);
// 设置像素比
render.setPixelRatio(window.devicePixelRatio);
// 将创建的对象添加到canvas元素中
container.append(render.domElement);
// 渲染场景
render.render(scene, camera);

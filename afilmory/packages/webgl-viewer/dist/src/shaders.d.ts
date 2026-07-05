/**
 * WebGL着色器定义
 *
 * 包含顶点着色器和片段着色器的源码
 */
/**
 * 顶点着色器源码
 * 负责处理顶点变换和纹理坐标传递
 */
export declare const VERTEX_SHADER_SOURCE = "\n  attribute vec2 a_position;\n  attribute vec2 a_texCoord;\n  \n  uniform mat3 u_matrix;\n  \n  varying vec2 v_texCoord;\n  \n  void main() {\n    vec3 position = u_matrix * vec3(a_position, 1.0);\n    gl_Position = vec4(position.xy, 0, 1);\n    v_texCoord = a_texCoord;\n  }\n";
/**
 * 片段着色器源码
 * 负责像素的最终着色
 */
export declare const FRAGMENT_SHADER_SOURCE = "\n  precision mediump float;\n  \n  uniform sampler2D u_image;\n  uniform int u_renderMode;\n  uniform vec4 u_solidColor;\n  varying vec2 v_texCoord;\n  \n  void main() {\n    if (u_renderMode == 0) {\n      gl_FragColor = texture2D(u_image, v_texCoord);\n    } else {\n      gl_FragColor = u_solidColor;\n    }\n  }\n";
/**
 * 创建WebGL着色器
 * @param gl WebGL渲染上下文
 * @param type 着色器类型
 * @param source 着色器源码
 * @returns 编译好的着色器
 */
export declare function createShader(gl: WebGLRenderingContext, type: number, source: string): WebGLShader;

attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

varying vec2 vTextureCoord;

uniform sampler2D uSampler2;

uniform float normScale;

uniform float timeFactor;

void main() {
	vTextureCoord = aTextureCoord;

	vec3 offset = 0.25*vec3(0.0, 0.0, texture2D(uSampler2, vTextureCoord).b);	

	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition+offset, 1.0);
}

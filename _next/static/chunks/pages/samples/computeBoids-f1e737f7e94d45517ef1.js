_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"20a2":function(e,n,t){e.exports=t("nOHt")},"5IKv":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/samples/computeBoids",function(){return t("SR1g")}])},"8i9l":function(e,n,t){"use strict";t.d(n,"a",(function(){return v}));var a=t("nKUr"),r=t("rePB"),i=t("g4pe"),s=t.n(i),c=t("20a2"),o=t("q1tI"),u=t("hIuh"),l=t.n(u);function f(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?f(Object(t),!0).forEach((function(n){Object(r.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var d="undefined"!==typeof GPUDevice&&t("7QzT").setShaderRegisteredCallback;t("+dQi");var m=function(e){var n=Object(o.useRef)(null),r=Object(o.useMemo)((function(){return e.sources.map((function(e){return p({name:e.name},function(e,n){var r,i={lineNumbers:!0,lineWrapping:!0,theme:"monokai",readOnly:!n},s=null,c=[];s=document.createElement("div");var o=t("VrN/");return(r=o(s,i)).updatedSource=function(e){c.forEach((function(n){return n(e)}))},{updateCallbacks:c,Container:function(t){return Object(a.jsxs)("div",p(p({},t),{},{children:[n?Object(a.jsx)("button",{className:l.a.updateSourceBtn,onClick:function(){r.updatedSource(r.getValue())},children:"Update"}):null,Object(a.jsx)("div",{ref:function(n){s&&n&&(n.appendChild(s),r.setOption("value",e))}})]}))}}}(e.contents,e.editable))}))}),e.sources),i=Object(o.useRef)(null),u=Object(o.useMemo)((function(){if(e.gui)return new(t("iZKT").GUI)({autoPlace:!1})}),[]),f=Object(c.useRouter)().asPath.match(/#([a-zA-Z0-9\.\/]+)/),m=Object(o.useState)(null),v=m[0],g=m[1],b=Object(o.useState)(null),h=b[0],P=b[1];return Object(o.useEffect)((function(){P(f?f[1]:r[0].name),u&&i.current&&i.current.appendChild(u.domElement);try{var t=e.init({canvasRef:n,gui:u});t instanceof Promise&&t.catch((function(e){console.error(e),g(e)}))}catch(a){console.error(a),g(a)}}),[]),Object(o.useEffect)((function(){d&&d((function(n,t){var a=e.sources.findIndex((function(e){return e.contents==n}));r[a].updateCallbacks.push(t)}))}),[r]),Object(a.jsxs)("main",{children:[Object(a.jsxs)(s.a,{children:[Object(a.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n            .CodeMirror {\n              height: auto !important;\n              margin: 1em 0;\n            }\n\n            .CodeMirror-scroll {\n              height: auto !important;\n              overflow: visible !important;\n            }\n          "}}),Object(a.jsx)("title",{children:"".concat(e.name," - WebGPU Samples")}),Object(a.jsx)("meta",{name:"description",content:e.description})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:e.name}),Object(a.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/austinEng/webgpu-samples/tree/main/".concat(e.filename),children:"See it on Github!"}),Object(a.jsx)("p",{children:e.description}),v?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("p",{children:"Is WebGPU Enabled?"}),Object(a.jsx)("p",{children:"".concat(v)})]}):null]}),Object(a.jsxs)("div",{className:l.a.canvasContainer,children:[Object(a.jsx)("div",{style:{position:"absolute",right:10},ref:i}),Object(a.jsx)("canvas",{ref:n,width:600,height:600})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("nav",{className:l.a.sourceFileNav,children:Object(a.jsx)("ul",{children:r.map((function(e,n){return Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#".concat(e.name),"data-active":h==e.name,onClick:function(){P(e.name)},children:e.name})},n)}))})}),r.map((function(e,n){return Object(a.jsx)(e.Container,{className:l.a.sourceFileContainer,"data-active":h==e.name},n)}))]})]})},v=function(e){return Object(a.jsx)(m,p({},e))}},QjI5:function(e,n,t){"use strict";n.a="struct Particle {\n  pos : vec2<f32>;\n  vel : vec2<f32>;\n};\n[[block]] struct SimParams {\n  deltaT : f32;\n  rule1Distance : f32;\n  rule2Distance : f32;\n  rule3Distance : f32;\n  rule1Scale : f32;\n  rule2Scale : f32;\n  rule3Scale : f32;\n};\n[[block]] struct Particles {\n  particles : [[stride(16)]] array<Particle>;\n};\n[[binding(0), group(0)]] var<uniform> params : SimParams;\n[[binding(1), group(0)]] var<storage> particlesA : [[access(read)]] Particles;\n[[binding(2), group(0)]] var<storage> particlesB : [[access(read_write)]] Particles;\n\n// https://github.com/austinEng/Project6-Vulkan-Flocking/blob/master/data/shaders/computeparticles/particle.comp\n[[stage(compute)]]\nfn main([[builtin(global_invocation_id)]] GlobalInvocationID : vec3<u32>) {\n  var index : u32 = GlobalInvocationID.x;\n\n  var vPos : vec2<f32> = particlesA.particles[index].pos;\n  var vVel : vec2<f32> = particlesA.particles[index].vel;\n  var cMass : vec2<f32> = vec2<f32>(0.0, 0.0);\n  var cVel : vec2<f32> = vec2<f32>(0.0, 0.0);\n  var colVel : vec2<f32> = vec2<f32>(0.0, 0.0);\n  var cMassCount : u32 = 0u;\n  var cVelCount : u32 = 0u;\n  var pos : vec2<f32>;\n  var vel : vec2<f32>;\n\n  for (var i : u32 = 0u; i < arrayLength(particlesA.particles); i = i + 1u) {\n    if (i == index) {\n      continue;\n    }\n\n    pos = particlesA.particles[i].pos.xy;\n    vel = particlesA.particles[i].vel.xy;\n    if (distance(pos, vPos) < params.rule1Distance) {\n      cMass = cMass + pos;\n      cMassCount = cMassCount + 1u;\n    }\n    if (distance(pos, vPos) < params.rule2Distance) {\n      colVel = colVel - (pos - vPos);\n    }\n    if (distance(pos, vPos) < params.rule3Distance) {\n      cVel = cVel + vel;\n      cVelCount = cVelCount + 1u;\n    }\n  }\n  if (cMassCount > 0u) {\n    var temp : f32 = f32(cMassCount);\n    cMass = (cMass / vec2<f32>(temp, temp)) - vPos;\n  }\n  if (cVelCount > 0u) {\n    var temp : f32 = f32(cVelCount);\n    cVel = cVel / vec2<f32>(temp, temp);\n  }\n  vVel = vVel + (cMass * params.rule1Scale) + (colVel * params.rule2Scale) +\n      (cVel * params.rule3Scale);\n\n  // clamp velocity for a more pleasing simulation\n  vVel = normalize(vVel) * clamp(length(vVel), 0.0, 0.1);\n  // kinematic update\n  vPos = vPos + (vVel * params.deltaT);\n  // Wrap around boundary\n  if (vPos.x < -1.0) {\n    vPos.x = 1.0;\n  }\n  if (vPos.x > 1.0) {\n    vPos.x = -1.0;\n  }\n  if (vPos.y < -1.0) {\n    vPos.y = 1.0;\n  }\n  if (vPos.y > 1.0) {\n    vPos.y = -1.0;\n  }\n  // Write back\n  particlesB.particles[index].pos = vPos;\n  particlesB.particles[index].vel = vVel;\n}\n"},RDV1:function(e,n,t){"use strict";n.a="[[stage(vertex)]]\nfn vert_main([[location(0)]] a_particlePos : vec2<f32>,\n             [[location(1)]] a_particleVel : vec2<f32>,\n             [[location(2)]] a_pos : vec2<f32>) -> [[builtin(position)]] vec4<f32> {\n  var angle : f32 = -atan2(a_particleVel.x, a_particleVel.y);\n  var pos : vec2<f32> = vec2<f32>(\n      (a_pos.x * cos(angle)) - (a_pos.y * sin(angle)),\n      (a_pos.x * sin(angle)) + (a_pos.y * cos(angle)));\n  return vec4<f32>(pos + a_particlePos, 0.0, 1.0);\n}\n\n[[stage(fragment)]]\nfn frag_main() -> [[location(0)]] vec4<f32> {\n  return vec4<f32>(1.0, 1.0, 1.0, 1.0);\n}\n"},SR1g:function(e,n,t){"use strict";t.r(n);var a=t("YdKy");n.default=a.a},YdKy:function(e,n,t){"use strict";(function(e,a){var r=t("o0o1"),i=t.n(r),s=t("HaE+"),c=t("8i9l"),o=t("RDV1"),u=t("QjI5"),l=function(){var e=Object(s.a)(i.a.mark((function e(n){var t,a,r,s,c,l,f,p,d,m,v,g,b,h,P,y,S,x,j,w,O,B,_,C,E,D;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return D=function(){var e=f.getCurrentTexture();if(e){v.colorAttachments[0].view=e.createView();var n=s.createCommandEncoder(),t=n.beginComputePass();t.setPipeline(m),t.setBindGroup(0,B[E%2]),t.dispatch(x),t.endPass();var a=n.beginRenderPass(v);a.setPipeline(d),a.setVertexBuffer(0,O[(E+1)%2]),a.setVertexBuffer(1,b),a.draw(3,x,0,0),a.endPass(),s.queue.submit([n.finish()]),++E,requestAnimationFrame(D)}},S=function(){s.queue.writeBuffer(y,0,new Float32Array([h.deltaT,h.rule1Distance,h.rule2Distance,h.rule3Distance,h.rule1Scale,h.rule2Scale,h.rule3Scale]))},t=n.canvasRef,a=n.gui,e.next=5,navigator.gpu.requestAdapter();case 5:return r=e.sent,e.next=8,r.requestDevice();case 8:if(s=e.sent,null!==t.current){e.next=11;break}return e.abrupt("return");case 11:for(c=t.current.getContext("gpupresent"),l="bgra8unorm",f=c.configureSwapChain({device:s,format:l}),p=s.createShaderModule({code:o.a}),d=s.createRenderPipeline({vertex:{module:p,entryPoint:"vert_main",buffers:[{arrayStride:16,stepMode:"instance",attributes:[{shaderLocation:0,offset:0,format:"float32x2"},{shaderLocation:1,offset:8,format:"float32x2"}]},{arrayStride:8,stepMode:"vertex",attributes:[{shaderLocation:2,offset:0,format:"float32x2"}]}]},fragment:{module:p,entryPoint:"frag_main",targets:[{format:l}]},primitive:{topology:"triangle-list"}}),m=s.createComputePipeline({compute:{module:s.createShaderModule({code:u.a}),entryPoint:"main"}}),v={colorAttachments:[{view:void 0,loadValue:{r:0,g:0,b:0,a:1},storeOp:"store"}]},g=new Float32Array([-.01,-.02,.01,-.02,0,.02]),b=s.createBuffer({size:g.byteLength,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0}),new Float32Array(b.getMappedRange()).set(g),b.unmap(),h={deltaT:.04,rule1Distance:.1,rule2Distance:.025,rule3Distance:.025,rule1Scale:.02,rule2Scale:.05,rule3Scale:.005},P=7*Float32Array.BYTES_PER_ELEMENT,y=s.createBuffer({size:P,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),S(),Object.keys(h).forEach((function(e){a.add(h,e).onFinishChange(S)})),x=1500,j=new Float32Array(4*x),w=0;w<x;++w)j[4*w+0]=2*(Math.random()-.5),j[4*w+1]=2*(Math.random()-.5),j[4*w+2]=2*(Math.random()-.5)*.1,j[4*w+3]=2*(Math.random()-.5)*.1;for(O=new Array(2),B=new Array(2),_=0;_<2;++_)O[_]=s.createBuffer({size:j.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.STORAGE,mappedAtCreation:!0}),new Float32Array(O[_].getMappedRange()).set(j),O[_].unmap();for(C=0;C<2;++C)B[C]=s.createBindGroup({layout:m.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:y}},{binding:1,resource:{buffer:O[C],offset:0,size:j.byteLength}},{binding:2,resource:{buffer:O[(C+1)%2],offset:0,size:j.byteLength}}]});E=0,requestAnimationFrame(D);case 36:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();n.a=function(){return Object(c.a)({name:"Compute Boids",description:"A GPU compute particle simulation that mimics the flocking behavior of birds. A compute shader updates two ping-pong buffers which store particle data. The data is used to draw instanced particles.",gui:!0,init:l,sources:[{name:e.substr(a.length+1),contents:"import { makeSample, SampleInit } from '../../components/SampleLayout';\n\nimport spriteWGSL from './sprite.wgsl';\nimport updateSpritesWGSL from './updateSprites.wgsl';\n\nconst init: SampleInit = async ({ canvasRef, gui }) => {\n  const adapter = await navigator.gpu.requestAdapter();\n  const device = await adapter.requestDevice();\n\n  if (canvasRef.current === null) return;\n  const context = canvasRef.current.getContext('gpupresent');\n\n  const swapChainFormat = 'bgra8unorm';\n  const swapChain = context.configureSwapChain({\n    device,\n    format: swapChainFormat,\n  });\n\n  const spriteShaderModule = device.createShaderModule({ code: spriteWGSL });\n  const renderPipeline = device.createRenderPipeline({\n    vertex: {\n      module: spriteShaderModule,\n      entryPoint: 'vert_main',\n      buffers: [\n        {\n          // instanced particles buffer\n          arrayStride: 4 * 4,\n          stepMode: 'instance',\n          attributes: [\n            {\n              // instance position\n              shaderLocation: 0,\n              offset: 0,\n              format: 'float32x2',\n            },\n            {\n              // instance velocity\n              shaderLocation: 1,\n              offset: 2 * 4,\n              format: 'float32x2',\n            },\n          ],\n        },\n        {\n          // vertex buffer\n          arrayStride: 2 * 4,\n          stepMode: 'vertex',\n          attributes: [\n            {\n              // vertex positions\n              shaderLocation: 2,\n              offset: 0,\n              format: 'float32x2',\n            },\n          ],\n        },\n      ],\n    },\n    fragment: {\n      module: spriteShaderModule,\n      entryPoint: 'frag_main',\n      targets: [\n        {\n          format: swapChainFormat,\n        },\n      ],\n    },\n    primitive: {\n      topology: 'triangle-list',\n    },\n  });\n\n  const computePipeline = device.createComputePipeline({\n    compute: {\n      module: device.createShaderModule({\n        code: updateSpritesWGSL,\n      }),\n      entryPoint: 'main',\n    },\n  });\n\n  const renderPassDescriptor: GPURenderPassDescriptor = {\n    colorAttachments: [\n      {\n        view: undefined, // Assigned later\n        loadValue: { r: 0.0, g: 0.0, b: 0.0, a: 1.0 },\n        storeOp: 'store',\n      },\n    ],\n  };\n\n  // prettier-ignore\n  const vertexBufferData = new Float32Array([\n    -0.01, -0.02, 0.01,\n    -0.02, 0.0, 0.02,\n  ]);\n\n  const spriteVertexBuffer = device.createBuffer({\n    size: vertexBufferData.byteLength,\n    usage: GPUBufferUsage.VERTEX,\n    mappedAtCreation: true,\n  });\n  new Float32Array(spriteVertexBuffer.getMappedRange()).set(vertexBufferData);\n  spriteVertexBuffer.unmap();\n\n  const simParams = {\n    deltaT: 0.04,\n    rule1Distance: 0.1,\n    rule2Distance: 0.025,\n    rule3Distance: 0.025,\n    rule1Scale: 0.02,\n    rule2Scale: 0.05,\n    rule3Scale: 0.005,\n  };\n\n  const simParamBufferSize = 7 * Float32Array.BYTES_PER_ELEMENT;\n  const simParamBuffer = device.createBuffer({\n    size: simParamBufferSize,\n    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,\n  });\n\n  function updateSimParams() {\n    device.queue.writeBuffer(\n      simParamBuffer,\n      0,\n      new Float32Array([\n        simParams.deltaT,\n        simParams.rule1Distance,\n        simParams.rule2Distance,\n        simParams.rule3Distance,\n        simParams.rule1Scale,\n        simParams.rule2Scale,\n        simParams.rule3Scale,\n      ])\n    );\n  }\n\n  updateSimParams();\n  Object.keys(simParams).forEach((k) => {\n    gui.add(simParams, k).onFinishChange(updateSimParams);\n  });\n\n  const numParticles = 1500;\n  const initialParticleData = new Float32Array(numParticles * 4);\n  for (let i = 0; i < numParticles; ++i) {\n    initialParticleData[4 * i + 0] = 2 * (Math.random() - 0.5);\n    initialParticleData[4 * i + 1] = 2 * (Math.random() - 0.5);\n    initialParticleData[4 * i + 2] = 2 * (Math.random() - 0.5) * 0.1;\n    initialParticleData[4 * i + 3] = 2 * (Math.random() - 0.5) * 0.1;\n  }\n\n  const particleBuffers: GPUBuffer[] = new Array(2);\n  const particleBindGroups: GPUBindGroup[] = new Array(2);\n  for (let i = 0; i < 2; ++i) {\n    particleBuffers[i] = device.createBuffer({\n      size: initialParticleData.byteLength,\n      usage: GPUBufferUsage.VERTEX | GPUBufferUsage.STORAGE,\n      mappedAtCreation: true,\n    });\n    new Float32Array(particleBuffers[i].getMappedRange()).set(\n      initialParticleData\n    );\n    particleBuffers[i].unmap();\n  }\n\n  for (let i = 0; i < 2; ++i) {\n    particleBindGroups[i] = device.createBindGroup({\n      layout: computePipeline.getBindGroupLayout(0),\n      entries: [\n        {\n          binding: 0,\n          resource: {\n            buffer: simParamBuffer,\n          },\n        },\n        {\n          binding: 1,\n          resource: {\n            buffer: particleBuffers[i],\n            offset: 0,\n            size: initialParticleData.byteLength,\n          },\n        },\n        {\n          binding: 2,\n          resource: {\n            buffer: particleBuffers[(i + 1) % 2],\n            offset: 0,\n            size: initialParticleData.byteLength,\n          },\n        },\n      ],\n    });\n  }\n\n  let t = 0;\n  function frame() {\n    const backbuffer = swapChain.getCurrentTexture();\n    if (!backbuffer) return;\n\n    renderPassDescriptor.colorAttachments[0].view = backbuffer.createView();\n\n    const commandEncoder = device.createCommandEncoder();\n    {\n      const passEncoder = commandEncoder.beginComputePass();\n      passEncoder.setPipeline(computePipeline);\n      passEncoder.setBindGroup(0, particleBindGroups[t % 2]);\n      passEncoder.dispatch(numParticles);\n      passEncoder.endPass();\n    }\n    {\n      const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);\n      passEncoder.setPipeline(renderPipeline);\n      passEncoder.setVertexBuffer(0, particleBuffers[(t + 1) % 2]);\n      passEncoder.setVertexBuffer(1, spriteVertexBuffer);\n      passEncoder.draw(3, numParticles, 0, 0);\n      passEncoder.endPass();\n    }\n    device.queue.submit([commandEncoder.finish()]);\n\n    ++t;\n    requestAnimationFrame(frame);\n  }\n  requestAnimationFrame(frame);\n};\n\nconst ComputeBoids: () => JSX.Element = () =>\n  makeSample({\n    name: 'Compute Boids',\n    description:\n      'A GPU compute particle simulation that mimics \\\nthe flocking behavior of birds. A compute shader updates \\\ntwo ping-pong buffers which store particle data. The data \\\nis used to draw instanced particles.',\n    gui: true,\n    init,\n    sources: [\n      {\n        name: __filename.substr(__dirname.length + 1),\n        contents: __SOURCE__,\n      },\n      {\n        name: 'updateSprites.wgsl',\n        contents: updateSpritesWGSL,\n        editable: true,\n      },\n      {\n        name: 'sprite.wgsl',\n        contents: spriteWGSL,\n        editable: true,\n      },\n    ],\n    filename: __filename,\n  });\n\nexport default ComputeBoids;\n"},{name:"updateSprites.wgsl",contents:u.a,editable:!0},{name:"sprite.wgsl",contents:o.a,editable:!0}],filename:e})}}).call(this,"src/sample/computeBoids/main.ts","src/sample/computeBoids")},hIuh:function(e,n,t){e.exports={canvasContainer:"SampleLayout_canvasContainer__1qkqt",sourceFileNav:"SampleLayout_sourceFileNav__2aMxK",sourceFileContainer:"SampleLayout_sourceFileContainer__3iiDM",updateSourceBtn:"SampleLayout_updateSourceBtn__3lOwr"}}},[["5IKv",0,1,4,2,3,6]]]);
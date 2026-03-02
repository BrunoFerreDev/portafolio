<template>
    <div class="flex-1 relative w-full aspect-square max-w-[500px]">
        <div class="absolute inset-0 bg-primary/20 blur-[100px] rounded-full"></div>
        <div
            class="relative z-10 w-full h-full rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 p-4 shadow-2xl">
            <div class="flex gap-1.5 mb-4">
                <div class="size-3 rounded-full bg-red-500/50"></div>
                <div class="size-3 rounded-full bg-yellow-500/50"></div>
                <div class="size-3 rounded-full bg-green-500/50"></div>
            </div>
            <code class="text-sm text-slate-300 leading-relaxed block font-mono">
<span class="text-purple-400">@RestController</span><br/>
<span class="text-purple-400">@RequestMapping</span>(<span class="text-green-400">"/api/v1/systems"</span>)<br/>
<span class="text-blue-400">public class</span> <span class="text-yellow-400">ArchitectureController</span> {<br/>
                          <span class="text-purple-400">@Autowired</span><br/>
                          <span class="text-blue-400">private</span> ScalabilityService service;<br/><br/>
                          <span class="text-purple-400">@PostMapping</span>(<span class="text-green-400">"/optimize"</span>)<br/>
                          <span class="text-blue-400">public</span> ResponseEntity&lt;Response&gt; scale() {<br/>
                            <span class="text-slate-500">// Deploying cloud-native solutions</span><br/>
                            <span class="text-blue-400">return</span> service.deployMicroservices();<br/>
                          }<br/>
                        }   
                    </code>
        </div>
    </div>
</template>
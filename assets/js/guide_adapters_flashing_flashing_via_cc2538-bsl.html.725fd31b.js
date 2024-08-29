"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[32811],{83611:(e,a,s)=>{s.r(a),s.d(a,{comp:()=>o,data:()=>d});var n=s(86904);const i=(0,n.Fv)('<h1 id="flashing-the-firmware-via-cc2538-bsl" tabindex="-1"><a class="header-anchor" href="#flashing-the-firmware-via-cc2538-bsl"><span>Flashing the firmware via cc2538-bsl</span></a></h1><p><a href="https://github.com/JelmerT/cc2538-bsl" target="_blank" rel="noopener noreferrer">TI CC13xx/CC2538/CC26xx Serial Boot Loader</a></p><p>CC2538-bsl is a python script by <a href="https://github.com/JelmerT" target="_blank" rel="noopener noreferrer">Jelmer Tiete</a> that communicates with the boot loader of the Texas Instruments CC2538, CC26xx and CC13xx SoCs (System on Chips).</p><p>In this case we use a Sonoff Zigbee 3.0 USB Dongle Plus and flash the firmware without opening the case to press the &quot;Boot&quot; button.</p><h2 id="method-with-docker-linux-only" tabindex="-1"><a class="header-anchor" href="#method-with-docker-linux-only"><span>Method with Docker (Linux only)</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">docker</span> run <span class="token parameter variable">--rm</span> <span class="token punctuation">\\</span></span>\n<span class="line">    <span class="token parameter variable">--device</span> /dev/ttyUSB0:/dev/ttyUSB0 <span class="token punctuation">\\</span></span>\n<span class="line">    <span class="token parameter variable">-e</span> <span class="token assign-left variable">FIRMWARE_URL</span><span class="token operator">=</span>https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20240710/CC1352P2_CC2652P_launchpad_coordinator_20240710.zip <span class="token punctuation">\\</span></span>\n<span class="line">    ckware/ti-cc-tool <span class="token parameter variable">-ewv</span> <span class="token parameter variable">-p</span> /dev/ttyUSB0 --bootloader-sonoff-usb</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can find details on the Docker command <a href="https://github.com/git-developer/ti-cc-tool" target="_blank" rel="noopener noreferrer">here</a></p><h2 id="method-without-docker" tabindex="-1"><a class="header-anchor" href="#method-without-docker"><span>Method without Docker</span></a></h2><h3 id="prepare-your-system-debian-based" tabindex="-1"><a class="header-anchor" href="#prepare-your-system-debian-based"><span>Prepare your system (debian based)</span></a></h3><ol><li>Install python and python-pip.</li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> update <span class="token operator">&amp;&amp;</span> <span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> python3 python3-pip</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="2"><li>Install needed python packages.</li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> pip3 <span class="token function">install</span> pyserial intelhex</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="download-cc2538-bsl" tabindex="-1"><a class="header-anchor" href="#download-cc2538-bsl"><span>Download cc2538-bsl</span></a></h3><ol start="3"><li>Create a directory named &quot;cc2538-bsl&quot;, download the last master of cc2538-bsl as tarball and extract in same folder.</li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">mkdir</span> cc2538-bsl</span>\n<span class="line"><span class="token builtin class-name">cd</span> cc2538-bsl</span>\n<span class="line"><span class="token function">curl</span> <span class="token parameter variable">-sSL</span> https://github.com/JelmerT/cc2538-bsl/archive/refs/heads/master.tar.gz <span class="token operator">|</span> <span class="token function">tar</span> xz <span class="token parameter variable">--strip</span> <span class="token number">1</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The sonoff feature is in the master since 20.01.2022.</p><h3 id="download-the-firmware" tabindex="-1"><a class="header-anchor" href="#download-the-firmware"><span>Download the Firmware</span></a></h3>',18),t=(0,n.Lk)("code",null,"c2538-bsl",-1),l=(0,n.Fv)('<ol start="4"><li>In this case we will flash <code>CC1352P2_CC2652P_launchpad_coordinator_***.zip</code>.</li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">wget</span> https://github.com/Koenkk/Z-Stack-firmware/releases/download/Z-Stack_3.x.0_coordinator_20240710/CC1352P2_CC2652P_launchpad_coordinator_20240710.zip</span>\n<span class="line"><span class="token function">unzip</span> CC1352P2_CC2652P_launchpad_coordinator_20240710.zip</span>\n<span class="line"></span>\n<span class="line"><span class="token function">sudo</span> python3 cc2538-bsl.py <span class="token parameter variable">-ewv</span> <span class="token parameter variable">-p</span> /dev/ttyUSB0 --bootloader-sonoff-usb ./CC1352P2_CC2652P_launchpad_coordinator_20240710.hex</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>-ewv</code> means Mass <strong>e</strong>rase, <strong>w</strong>rite, <strong>v</strong>erify<br><code>-p</code> is the port on which your device is running, in this case <code>/dev/ttyUSB0</code><br><code>--bootloader-sonoff-usb</code> means that the bootloader is activated by the script, by toggling RTS and DTR in the correct pattern for Sonoff USB dongle (remove this if your device is not a Sonoff dongle).</p><p>If the flash process was successfully done, an output like this appears:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">sonoff</span>\n<span class="line">Opening port /dev/ttyUSB0, baud 500000</span>\n<span class="line">Reading data from ../CC1352P2_CC2652P_launchpad_coordinator_20240710.hex</span>\n<span class="line">Your firmware looks like an Intel Hex file</span>\n<span class="line">Connecting to target...</span>\n<span class="line">CC1350 PG2.0 (7x7mm): 352KB Flash, 20KB SRAM, CCFG.BL_CONFIG at 0x00057FD8</span>\n<span class="line">Primary IEEE Address: 00:00:00:00:00:00:00:00</span>\n<span class="line">    Performing mass erase</span>\n<span class="line">Erasing all main bank flash sectors</span>\n<span class="line">    Erase done</span>\n<span class="line">Writing 360448 bytes starting at address 0x00000000</span>\n<span class="line">Write 104 bytes at 0x00057F988</span>\n<span class="line">    Write done</span>\n<span class="line">Verifying by comparing CRC32 calculations.</span>\n<span class="line">    Verified (match: 0xe0c256fd)</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="how-to-check-the-installed-firmware-version" tabindex="-1"><a class="header-anchor" href="#how-to-check-the-installed-firmware-version"><span>How-to check the installed firmware version</span></a></h3><p>Zigbee2MQTT will output the installed firmware version to the Zigbee2MQTT log on startup:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Zigbee2MQTT:info  2022-01-05 22:36:34: Coordinator firmware version: &#39;{&quot;meta&quot;:{&quot;maintrel&quot;:1,&quot;majorrel&quot;:2,&quot;minorrel&quot;:7,&quot;product&quot;:1,&quot;revision&quot;:20240710,&quot;transportrev&quot;:2},&quot;type&quot;:&quot;zStack3x0&quot;}&#39;&#39;</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>In the above example the version is <code>20240710</code>.</p>',9),r={},o=(0,s(22652).A)(r,[["render",function(e,a){const s=(0,n.g2)("RouteLink");return(0,n.uX)(),(0,n.CE)("div",null,[i,(0,n.Lk)("p",null,[(0,n.eW)("Download the firmware for your adapter from the "),(0,n.bF)(s,{to:"/guide/adapters/"},{default:(0,n.k6)((()=>[(0,n.eW)("Supported adapter page")])),_:1}),(0,n.eW)(" and unzip it in the "),t,(0,n.eW)(" directory. So everything needed is in one folder.")]),l])}]]),d=JSON.parse('{"path":"/guide/adapters/flashing/flashing_via_cc2538-bsl.html","title":"Flashing the firmware via cc2538-bsl","lang":"en-US","frontmatter":{"pageClass":"content-page"},"headers":[{"level":2,"title":"Method with Docker (Linux only)","slug":"method-with-docker-linux-only","link":"#method-with-docker-linux-only","children":[]},{"level":2,"title":"Method without Docker","slug":"method-without-docker","link":"#method-without-docker","children":[{"level":3,"title":"Prepare your system (debian based)","slug":"prepare-your-system-debian-based","link":"#prepare-your-system-debian-based","children":[]},{"level":3,"title":"Download cc2538-bsl","slug":"download-cc2538-bsl","link":"#download-cc2538-bsl","children":[]},{"level":3,"title":"Download the Firmware","slug":"download-the-firmware","link":"#download-the-firmware","children":[]},{"level":3,"title":"How-to check the installed firmware version","slug":"how-to-check-the-installed-firmware-version","link":"#how-to-check-the-installed-firmware-version","children":[]}]}],"git":{"updatedTime":1724944653000},"filePathRelative":"guide/adapters/flashing/flashing_via_cc2538-bsl.md"}')}}]);
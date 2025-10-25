export default {
  async fetch() {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>ENCODER Bot — Changelog</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#0a0e27;color:#e0e0e0;min-height:100vh;padding:60px 20px;line-height:1.6}.wrapper{max-width:1000px;margin:0 auto}.header{margin-bottom:50px}.title{font-size:3rem;font-weight:800;background:linear-gradient(135deg,#00d9ff,#0099ff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:8px;letter-spacing:-1px}.subtitle{font-size:.9rem;color:#7a8aa0;text-transform:uppercase;letter-spacing:2px;font-weight:600}.divider{height:2px;background:linear-gradient(90deg,#00d9ff,#0099ff,transparent);margin:40px 0;opacity:.3}.version-group{margin-bottom:40px}.group-title{font-size:1.5rem;font-weight:800;color:#00d9ff;padding:16px 0;border-bottom:2px solid rgba(0,217,255,.2);margin-bottom:24px;font-family:'Monaco','Courier New',monospace;letter-spacing:1px;cursor:pointer;user-select:none;display:flex;align-items:center;gap:12px;transition:opacity .3s ease}.group-title:hover{opacity:.8}.group-icon{transition:transform .3s ease;display:inline-block}.version-group.closed .group-icon{transform:rotate(-90deg)}.version-group.closed .changelog{max-height:0;overflow:hidden;transition:max-height .4s cubic-bezier(.34,1.56,.64,1)}.changelog{display:flex;flex-direction:column;gap:16px}.entry{background:linear-gradient(135deg,rgba(15,30,70,.5),rgba(10,25,60,.3));border:1px solid rgba(0,217,255,.15);border-radius:12px;overflow:hidden;transition:all .3s cubic-bezier(.34,1.56,.64,1);cursor:pointer;backdrop-filter:blur(10px)}.entry:hover{border-color:rgba(0,217,255,.4);background:linear-gradient(135deg,rgba(20,40,90,.6),rgba(15,30,70,.4));transform:translateY(-4px);box-shadow:0 20px 40px rgba(0,217,255,.1)}.entry-header{padding:24px;display:flex;justify-content:space-between;align-items:center;user-select:none}.version-info{display:flex;flex-direction:column;gap:4px}.version-number{font-size:1.3rem;font-weight:700;color:#00d9ff;font-family:'Monaco','Courier New',monospace}.version-date{font-size:.85rem;color:#7a8aa0}.expand-icon{width:24px;height:24px;display:flex;align-items:center;justify-content:center;color:#00d9ff;transition:transform .3s ease;font-size:18px;flex-shrink:0}.entry.open .expand-icon{transform:rotate(180deg)}.entry-content{max-height:0;overflow:hidden;transition:max-height .4s cubic-bezier(.34,1.56,.64,1);border-top:1px solid rgba(0,217,255,.1)}.entry.open .entry-content{max-height:600px}.content-inner{padding:24px;display:flex;flex-direction:column;gap:16px}.section{display:flex;flex-direction:column;gap:8px}.section-title{font-size:.9rem;font-weight:700;color:#00d9ff;text-transform:uppercase;letter-spacing:1px}.item-list{list-style:none;display:flex;flex-direction:column;gap:8px;margin-left:8px}.item-list li{font-size:.95rem;color:#c0c8d8;padding-left:16px;position:relative}.item-list li:before{content:'';position:absolute;left:0;top:8px;width:6px;height:6px;background:#0099ff;border-radius:50%}.section-empty{color:#7a8aa0;font-size:.9rem;font-style:italic;margin-left:8px}.footer{margin-top:60px;padding-top:30px;border-top:1px solid rgba(0,217,255,.1);text-align:center;color:#7a8aa0;font-size:.9rem}@media(max-width:600px){.title{font-size:2rem}.entry-header{padding:16px}.version-number{font-size:1.1rem}.group-title{font-size:1.2rem}}
</style>
</head>
<body>
<div class="wrapper">
<div class="header">
<h1 class="title">◈ Echo ENCODER Bot ◈</h1>
<p class="subtitle">Changelog</p>
</div>
<div class="divider"></div>

<div class="version-group">
<div class="group-title"><span class="group-icon">▼</span>V1</div>
<div class="changelog">

<div class="entry open">
<div class="entry-header">
<div class="version-info">
<div class="version-number">v0.6.0</div>
<div class="version-date">Latest</div>
</div>
<div class="expand-icon">▼</div>
</div>
<div class="entry-content">
<div class="content-inner">
<div class="section">
<div class="section-title">Added</div>
<ul class="item-list">
<li>Video to MP3 conversion in CONVERT Tool</li>
<li>Default Watermark Font Changed</li>
<li>Added Time Range and Opacity in Watermark Tool</li>
</ul>
</div>
<div class="section">
<div class="section-title">Fixed</div>
<ul class="item-list">
<li>Merge function now includes a 3-hour timeout to prevent indefinite hangs</li>
<li>Added support for multi-audio and subtitle tracks in merged videos</li>
<li>Implemented error tolerance for corrupted frames to prevent merge failures</li>
<li>Improved process handling to avoid deadlocks</li>
<li>Enhanced error checking to ensure the merged file is valid and playable</li>
<li>Added cleanup for failed or incomplete output files</li>
<li>Implemented a pre-validation checkup phase to filter out corrupted or invalid files before merging</li>
</ul>
</div>
</div>
</div>
</div>

<div class="entry"><div class="entry-header"><div class="version-info"><div class="version-number">v0.5.0</div><div class="version-date">Previous</div></div><div class="expand-icon">▼</div></div><div class="entry-content"><div class="content-inner"><div class="section"><div class="section-title">Added</div><ul class="item-list"><li>ADD, REMOVE, COMPRESS, TRIM Tools</li><li>Add Subtitles & Audio in videos</li><li>Remove Subtitles & Audio tracks</li><li>Compress Media (144p to 1080p)</li><li>Trim videos by time range</li><li>4 GB Uploading Support</li></ul></div></div></div></div>

<div class="entry"><div class="entry-header"><div class="version-info"><div class="version-number">v0.4.0</div><div class="version-date">Archive</div></div><div class="expand-icon">▼</div></div><div class="entry-content"><div class="content-inner"><div class="section"><div class="section-title">Added</div><ul class="item-list"><li>EXTRACT Tool</li><li>Extract Subtitles from videos</li><li>Extract Audio tracks</li><li>Extract Thumbnails from Video's</li></ul></div><div class="section"><div class="section-title">Removed</div><ul class="item-list"><li>AVI format support from CONVERT Tool due to instability</li></ul></div></div></div></div>

<div class="entry"><div class="entry-header"><div class="version-info"><div class="version-number">v0.3.0</div><div class="version-date">Archive</div></div><div class="expand-icon">▼</div></div><div class="entry-content"><div class="content-inner"><div class="section"><div class="section-title">Added</div><ul class="item-list"><li>CONVERT Tool</li><li>MP4 to MKV conversion</li><li>MP4 to AVI conversion</li><li>MKV to MP4 conversion</li></ul></div></div></div></div>

<div class="entry"><div class="entry-header"><div class="version-info"><div class="version-number">v0.2.0</div><div class="version-date">Archive</div></div><div class="expand-icon">▼</div></div><div class="entry-content"><div class="content-inner"><div class="section"><div class="section-title">Added</div><ul class="item-list"><li>Video merge functionality (video + video)</li></ul></div></div></div></div>

<div class="entry"><div class="entry-header"><div class="version-info"><div class="version-number">v0.0.1</div><div class="version-date">Initial</div></div><div class="expand-icon">▼</div></div><div class="entry-content"><div class="content-inner"><div class="section"><div class="section-title">Added</div><ul class="item-list"><li>Initial project setup</li><li>Base handlers implementation</li><li>Core watermark functionality</li><li>Video processing architecture</li></ul></div></div></div></div>

</div>
</div>

<div class="version-group">
<div class="group-title"><span class="group-icon">▼</span>Upcoming</div>
<div class="changelog">
<div class="entry"><div class="entry-header"><div class="version-info"><div class="version-number">In Development</div></div><div class="expand-icon">▼</div></div><div class="entry-content"><div class="content-inner"><div class="section"><div class="section-title">TODO</div><ul class="item-list"><li>Custom Codec for FFmpeg</li><li>Custom CRF (Constant Rate Factor)</li><li>Preset options for encoding</li><li>Audio Bitrate Selection</li><li>Hard Subtitle Adding Support in ADD tool</li></ul></div><div class="section"><div class="section-title">Note</div><p class="section-empty">All features will be available in User Settings</p></div></div></div></div>
</div>
</div>

<div class="footer"><p>Click any version to expand and view details</p></div>
</div>

<script>
document.querySelectorAll('.entry-header').forEach(header=>{header.addEventListener('click',()=>{const entry=header.parentElement;if(entry){entry.classList.toggle('open')}})});
document.querySelectorAll('.group-title').forEach(title=>{title.addEventListener('click',()=>{const group=title.parentElement;if(group){group.classList.toggle('closed')}})});
</script>
</body>
</html>`;
    return new Response(html, { headers: { 'content-type': 'text/html; charset=utf-8' } });
  },
};

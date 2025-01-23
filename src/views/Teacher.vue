<template>
    <div class="zuo">
     <!-- 左侧栏按钮 -->
     <div class="sidebar-btn zjsz" @click="openSettingsModal" :class="{ 'active': isSettingsModalOpen }">
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><g fill="none"><path stroke="currentColor" stroke-width="2" data-swindex="0" d="M9 18H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2M4 8h16M4 13h5"></path><path stroke="currentColor" stroke-width="2" data-swindex="0" d="M11.54 16.972a2 2 0 0 1 0-1.944l.676-1.213l.712-1.19a2 2 0 0 1 1.684-.973L16 11.63l1.388.022a2 2 0 0 1 1.684.972l.713 1.191l.674 1.213a2 2 0 0 1 0 1.944l-.674 1.213l-.713 1.19a2 2 0 0 1-1.684.973L16 20.37l-1.388-.022a2 2 0 0 1-1.684-.972l-.713-1.191z"></path><circle cx="16" cy="16" r="1" fill="currentColor"></circle></g></svg>
  <div class="zjsz1"> 助教设置</div>
       </div>
       <div class="sidebar-btn cpfk">
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16"><path fill="currentColor" d="M7.693 1.066a.75.75 0 0 1 .614 0l7.25 3.25a.75.75 0 0 1 0 1.368L13 6.831v2.794c0 1.024-.81 1.749-1.66 2.173c-.893.447-2.075.702-3.34.702q-.417 0-.816-.036a.75.75 0 0 1 .133-1.494Q7.649 11 8 11c1.082 0 2.025-.221 2.67-.543c.69-.345.83-.682.83-.832V7.503L8.307 8.934a.75.75 0 0 1-.614 0L4 7.28v1.663c.296.105.575.275.812.512c.438.438.688 1.059.688 1.796v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3c0-.737.25-1.358.688-1.796c.237-.237.516-.407.812-.512V6.606L.443 5.684a.75.75 0 0 1 0-1.368ZM2.583 5L8 7.428L13.416 5L8 2.572ZM2.5 11.25v2.25H4v-2.25c0-.388-.125-.611-.25-.735a.7.7 0 0 0-.5-.203a.7.7 0 0 0-.5.203c-.125.124-.25.347-.25.735"></path></svg>
   <div class="cpfk1">测评反馈</div>
       </div>
       <div class="sidebar-btn gxxt">
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3.25H6.75a2.43 2.43 0 0 0-2.5 2.35V18a2.85 2.85 0 0 0 2.94 2.75H19a.76.76 0 0 0 .75-.75V4a.76.76 0 0 0-.75-.75m-.75 16H7.19A1.35 1.35 0 0 1 5.75 18a1.35 1.35 0 0 1 1.44-1.25h11.06Zm0-4H7.19a3 3 0 0 0-1.44.37V5.6a.94.94 0 0 1 1-.85h11.5Z"></path><path fill="currentColor" d="M8.75 8.75h6.5a.75.75 0 0 0 0-1.5h-6.5a.75.75 0 0 0 0 1.5m0 3.5h6.5a.75.75 0 0 0 0-1.5h-6.5a.75.75 0 0 0 0 1.5"></path></svg>
   <div class="gxxt1">个性习题</div>
       </div>
       <div class="sidebar-btn wzjx">
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" data-swindex="0" d="M6.583 7.238c3.007.53 4.799 1.639 5.417 2.276c.618-.637 2.41-1.746 5.418-2.276c1.523-.269 2.285-.403 2.933.112C21 7.864 21 8.7 21 10.372v6.007c0 1.529 0 2.293-.416 2.77c-.417.477-1.333.639-3.166.962c-1.635.288-2.91.747-3.833 1.208c-.909.454-1.363.681-1.585.681s-.677-.227-1.585-.68c-.923-.462-2.198-.921-3.832-1.21c-1.834-.322-2.75-.484-3.167-.961S3 17.908 3 16.379v-6.007C3 8.7 3 7.864 3.649 7.35c.648-.515 1.41-.38 2.933-.112M12 9v13M8.5 3.059a6.29 6.29 0 0 1 7 .01M13.622 5.5a3.14 3.14 0 0 0-3.244-.01" color="currentColor"></path></svg>
   <div class="wzjx1">文章解析</div>
       </div>
       <div class="sidebar-btn grzx"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 6v-.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2v.8q0 .825-.587 1.413T18 20H6q-.825 0-1.412-.587T4 18m2 0h12v-.8q0-.275-.137-.5t-.363-.35q-1.35-.675-2.725-1.012T12 15t-2.775.338T6.5 16.35q-.225.125-.363.35T6 17.2zm6-8q.825 0 1.413-.587T14 8t-.587-1.412T12 6t-1.412.588T10 8t.588 1.413T12 10m0 8"></path></svg></div>
     </div>
   
   
   
   
   <!-- 助教设置弹窗 -->
   <div class="settings-modal" v-if="isSettingsModalOpen">
     <div class="modal-content">
     <div class="settings-header">
       <span class="close-btn" @click="closeSettingsModal">返回</span>
  
  
       <!-- 这里可以添加具体的设置选项 -->
       <div class="setting-kecheng">
   <div><label for="courseName">课程名称</label></div>
          <input type="text" id="courseName" v-model="setting1" />
          <div>
          <label for="schoolName">学校名称</label></div>
          <input type="text" id="schoolName" v-model="setting2" />
          <div><label for="departmentName">学院名称</label></div>
          <input type="text" id="departmentName" v-model="setting3" />
          <div><label for="teacherName">教师姓名</label></div>
          <input type="text" id="teacherName" v-model="setting4" />
          <div><label for="courseCategory">课程类别</label></div>
          <select id="courseCategory" v-model="setting5">
            <option value="">请选择</option>
            <option value="Baichuan">1</option>
            <option value="GLM-4">2</option>
            <option value="Llama2">3</option>
            <option value="InternLM">4</option>
            <option value="MiniCPM">5</option>
          </select>
          <div>
          <label for="modelCategory">模型类别</label>
          <!-- <div class="model-category"> -->
            <label>
              <input type="checkbox" value="Baichuan" v-model="modelCategories" />
              Baichuan
            </label>
            <label>
              <input type="checkbox" value="GLM-4" v-model="modelCategories" />
              GLM-4
            </label>
            <label>
              <input type="checkbox" value="Llama2" v-model="modelCategories" />
              Llama2
            </label>
            <label>
              <input type="checkbox" value="InternLM" v-model="modelCategories" />
              InternLM
            </label>
            <label>
              <input type="checkbox" value="MiniCPM" v-model="modelCategories" />
              MiniCPM
            </label>
          <!-- </div> -->
          </div>
          
    </div>
  
   <div class="setting-item1">
       
     </div>
       <div class="setting-item2">
       <label for="fileUpload">文件上传</label>
  
    
    <div class="file-upload">
    <input type="file" id="fileUpload" @change="handleFileUpload" />
    </div>
  
  
  
       </div>
       <button @click="confirmGenerate">确认生成</button>
   </div>
     </div>
   </div>
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
      
      
     <!-- 中间栏 -->
       <div class="zhong" :class="{ 'hidden': isHidden }">
      <div class="zhong-content">
        <button class="new-dialog-btn" @click="addNewDialog">新建对话</button>
        <svg class="shoushuo" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor">
            <circle cx="11" cy="11" r="5.5"></circle>
            <path stroke-linecap="round" stroke-linejoin="round" d="m15 15l4 4"></path>
          </g>
        </svg><br><br><br>
        <p v-if="todayDialogs.length > 0">当天</p>
        <div class='duihuaxuanze' 
             v-for="(dialog, index) in todayDialogs" 
             :key="index" 
             :class="{ 'selected': selectedDialogIndex.today === index }"
             @click="handleDialogClick('today', index)">
          <div class="dialog-text">{{ dialog }}</div>
          <button class="setting-btn" v-if="selectedDialogIndex.today === index" @click.stop="handleSettingClick('today', index)"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 1024 1024"><path fill="currentColor" d="M176 511a56 56 0 1 0 112 0a56 56 0 1 0-112 0m280 0a56 56 0 1 0 112 0a56 56 0 1 0-112 0m280 0a56 56 0 1 0 112 0a56 56 0 1 0-112 0"></path></svg></button>
  
          <div v-if="dialogSettings.today[index]" class="dialog-settings">
            <button @click="editDialog('today', index)"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 256 256"><path fill="currentColor" d="m229.66 58.34l-32-32a8 8 0 0 0-11.32 0l-96 96A8 8 0 0 0 88 128v32a8 8 0 0 0 8 8h32a8 8 0 0 0 5.66-2.34l96-96a8 8 0 0 0 0-11.32M124.69 152H104v-20.69l64-64L188.69 88ZM200 76.69L179.31 56L192 43.31L212.69 64ZM224 128v80a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h80a8 8 0 0 1 0 16H48v160h160v-80a8 8 0 0 1 16 0"></path></svg>
              编辑</button>
            <button @click="toggleSelectDialog('today', index)">   
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20"><path fill="currentColor" d="M5.854 4.354a.5.5 0 1 0-.708-.708L3.5 5.293l-.646-.647a.5.5 0 1 0-.708.708l1 1a.5.5 0 0 0 .708 0zM8 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m.5 4.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm-2.646-.854a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 .708-.708l.646.647l1.646-1.647a.5.5 0 0 1 .708 0"></path></svg>多选</button>
            <button @click="deleteDialog('today', index)">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="M7.616 20q-.667 0-1.141-.475T6 18.386V6h-.5q-.213 0-.356-.144T5 5.499t.144-.356T5.5 5H9q0-.31.23-.54t.54-.23h4.46q.31 0 .54.23T15 5h3.5q.213 0 .356.144t.144.357t-.144.356T18.5 6H18v12.385q0 .666-.475 1.14t-1.14.475zM17 6H7v12.385q0 .269.173.442t.443.173h8.769q.269 0 .442-.173t.173-.442zm-6.692 11q.213 0 .357-.144t.143-.356v-8q0-.213-.144-.356T10.307 8t-.356.144t-.143.356v8q0 .213.144.356q.144.144.356.144m3.385 0q.213 0 .356-.144t.143-.356v-8q0-.213-.144-.356Q13.904 8 13.692 8q-.213 0-.357.144t-.143.356v8q0 .213.144.356t.357.144M7 6v13z"></path></svg>删除</button>
          </div>
        </div>
        <p v-if="weeklyDialogs.length > 0">本周</p>
        <div class='duihuaxuanze' 
             v-for="(dialog, index) in weeklyDialogs" 
             :key="index" 
             :class="{ 'selected': selectedDialogIndex.weekly === index }"
             @click="handleDialogClick('weekly', index)">
          <div class="dialog-text">{{ dialog }}</div>
          <button class="setting-btn" v-if="selectedDialogIndex.weekly === index" @click.stop="handleSettingClick('weekly', index)"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 1024 1024"><path fill="currentColor" d="M176 511a56 56 0 1 0 112 0a56 56 0 1 0-112 0m280 0a56 56 0 1 0 112 0a56 56 0 1 0-112 0m280 0a56 56 0 1 0 112 0a56 56 0 1 0-112 0"></path></svg></button>
          <div v-if="dialogSettings.weekly[index]" class="dialog-settings">
            <button @click="editDialog('weekly', index)">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 256 256"><path fill="currentColor" d="m229.66 58.34l-32-32a8 8 0 0 0-11.32 0l-96 96A8 8 0 0 0 88 128v32a8 8 0 0 0 8 8h32a8 8 0 0 0 5.66-2.34l96-96a8 8 0 0 0 0-11.32M124.69 152H104v-20.69l64-64L188.69 88ZM200 76.69L179.31 56L192 43.31L212.69 64ZM224 128v80a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h80a8 8 0 0 1 0 16H48v160h160v-80a8 8 0 0 1 16 0"></path></svg>编辑</button>
            <button @click="toggleSelectDialog('today', index)">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20"><path fill="currentColor" d="M5.854 4.354a.5.5 0 1 0-.708-.708L3.5 5.293l-.646-.647a.5.5 0 1 0-.708.708l1 1a.5.5 0 0 0 .708 0zM8 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m.5 4.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm-2.646-.854a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 .708-.708l.646.647l1.646-1.647a.5.5 0 0 1 .708 0"></path></svg>多选</button>
            <button @click="deleteDialog('weekly', index)">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="M7.616 20q-.667 0-1.141-.475T6 18.386V6h-.5q-.213 0-.356-.144T5 5.499t.144-.356T5.5 5H9q0-.31.23-.54t.54-.23h4.46q.31 0 .54.23T15 5h3.5q.213 0 .356.144t.144.357t-.144.356T18.5 6H18v12.385q0 .666-.475 1.14t-1.14.475zM17 6H7v12.385q0 .269.173.442t.443.173h8.769q.269 0 .442-.173t.173-.442zm-6.692 11q.213 0 .357-.144t.143-.356v-8q0-.213-.144-.356T10.307 8t-.356.144t-.143.356v8q0 .213.144.356q.144.144.356.144m3.385 0q.213 0 .356-.144t.143-.356v-8q0-.213-.144-.356Q13.904 8 13.692 8q-.213 0-.357.144t-.143.356v8q0 .213.144.356t.357.144M7 6v13z"></path></svg>
              删除</button>
     
          </div>
        </div>
        <p v-if="monthlyDialogs.length > 0">本月</p>
        <div class='duihuaxuanze' 
             v-for="(dialog, index) in monthlyDialogs" 
             :key="index" 
             :class="{ 'selected': selectedDialogIndex.monthly === index }"
             @click="handleDialogClick('monthly', index)">
          <div class="dialog-text">{{ dialog }}</div>
          <button class="setting-btn" v-if="selectedDialogIndex.monthly === index" @click.stop="handleSettingClick('monthly', index)"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 1024 1024"><path fill="currentColor" d="M176 511a56 56 0 1 0 112 0a56 56 0 1 0-112 0m280 0a56 56 0 1 0 112 0a56 56 0 1 0-112 0m280 0a56 56 0 1 0 112 0a56 56 0 1 0-112 0"></path></svg></button>
          <div v-if="dialogSettings.monthly[index]" class="dialog-settings">
            <button @click="editDialog('monthly', index)"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 256 256"><path fill="currentColor"
               d="m229.66 58.34l-32-32a8 8 0 0 0-11.32 0l-96 96A8 8 0 0 0 88 128v32a8 8 0 0 0 8 8h32a8 8 0 0 0 5.66-2.34l96-96a8 8 0 0 0 0-11.32M124.69 152H104v-20.69l64-64L188.69 88ZM200 76.69L179.31 56L192 43.31L212.69 64ZM224 128v80a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h80a8 8 0 0 1 0 16H48v160h160v-80a8 8 0 0 1 16 0"></path></svg>编辑</button>
            <button @click="toggleSelectDialog('today', index)">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20"><path fill="currentColor" d="M5.854 4.354a.5.5 0 1 0-.708-.708L3.5 5.293l-.646-.647a.5.5 0 1 0-.708.708l1 1a.5.5 0 0 0 .708 0zM8 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m.5 4.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm-2.646-.854a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 .708-.708l.646.647l1.646-1.647a.5.5 0 0 1 .708 0"></path></svg>多选</button>
            <button @click="deleteDialog('monthly', index)">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="M7.616 20q-.667 0-1.141-.475T6 18.386V6h-.5q-.213 0-.356-.144T5 5.499t.144-.356T5.5 5H9q0-.31.23-.54t.54-.23h4.46q.31 0 .54.23T15 5h3.5q.213 0 .356.144t.144.357t-.144.356T18.5 6H18v12.385q0 .666-.475 1.14t-1.14.475zM17 6H7v12.385q0 .269.173.442t.443.173h8.769q.269 0 .442-.173t.173-.442zm-6.692 11q.213 0 .357-.144t.143-.356v-8q0-.213-.144-.356T10.307 8t-.356.144t-.143.356v8q0 .213.144.356q.144.144.356.144m3.385 0q.213 0 .356-.144t.143-.356v-8q0-.213-.144-.356Q13.904 8 13.692 8q-.213 0-.357.144t-.143.356v8q0 .213.144.356t.357.144M7 6v13z"></path></svg>删除</button>
       
          </div>
        </div>
        <p v-if="earlierDialogs.length > 0">更早</p>
        <div class='duihuaxuanze' 
             v-for="(dialog, index) in earlierDialogs" 
             :key="index" 
             :class="{ 'selected': selectedDialogIndex.earlier === index }"
             @click="handleDialogClick('earlier', index)">
          <div class="dialog-text">{{ dialog }}</div>
          <button class="setting-btn" v-if="selectedDialogIndex.earlier === index" @click.stop="handleSettingClick('earlier', index)"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 1024 1024"><path fill="currentColor" d="M176 511a56 56 0 1 0 112 0a56 56 0 1 0-112 0m280 0a56 56 0 1 0 112 0a56 56 0 1 0-112 0m280 0a56 56 0 1 0 112 0a56 56 0 1 0-112 0"></path></svg></button>
          <div v-if="dialogSettings.earlier[index]" class="dialog-settings">
            <button @click="editDialog('earlier', index)">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 256 256"><path fill="currentColor" d="m229.66 58.34l-32-32a8 8 0 0 0-11.32 0l-96 96A8 8 0 0 0 88 128v32a8 8 0 0 0 8 8h32a8 8 0 0 0 5.66-2.34l96-96a8 8 0 0 0 0-11.32M124.69 152H104v-20.69l64-64L188.69 88ZM200 76.69L179.31 56L192 43.31L212.69 64ZM224 128v80a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h80a8 8 0 0 1 0 16H48v160h160v-80a8 8 0 0 1 16 0"></path></svg>编辑</button>
            <button @click="toggleSelectDialog('earlier', index)">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20"><path fill="currentColor" d="M5.854 4.354a.5.5 0 1 0-.708-.708L3.5 5.293l-.646-.647a.5.5 0 1 0-.708.708l1 1a.5.5 0 0 0 .708 0zM8 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m.5 4.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm-2.646-.854a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 .708-.708l.646.647l1.646-1.647a.5.5 0 0 1 .708 0"></path></svg>多选</button>
            <button @click="deleteDialog('earlier', index)">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="M7.616 20q-.667 0-1.141-.475T6 18.386V6h-.5q-.213 0-.356-.144T5 5.499t.144-.356T5.5 5H9q0-.31.23-.54t.54-.23h4.46q.31 0 .54.23T15 5h3.5q.213 0 .356.144t.144.357t-.144.356T18.5 6H18v12.385q0 .666-.475 1.14t-1.14.475zM17 6H7v12.385q0 .269.173.442t.443.173h8.769q.269 0 .442-.173t.173-.442zm-6.692 11q.213 0 .357-.144t.143-.356v-8q0-.213-.144-.356T10.307 8t-.356.144t-.143.356v8q0 .213.144.356q.144.144.356.144m3.385 0q.213 0 .356-.144t.143-.356v-8q0-.213-.144-.356Q13.904 8 13.692 8q-.213 0-.357.144t-.143.356v8q0 .213.144.356t.357.144M7 6v13z"></path></svg>删除</button>
            
          </div>
          </div>
   <div class="sidebar-btn cang">
     <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
       <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
    data-swindex="0" d="m20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82M7 7h.01">
       </path>
     </svg>
     <span>收藏夹</span>
   </div>
   </div> </div> 
  
       <!-- 收起按钮 -->
       <div class="toggle-btn" @click="toggleZhong" :class="{ 'hidden': isHidden, 'mirrored': isHidden,'move':isMove}">
   <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="m8.369 12l4.747-8.968l1.768.936L10.632 12l4.252 8.032l-1.768.936z"></path></svg>
   </div>
   
  
  
  
  
  
  
  
  
       <transition name="fade">
      <div class="kcxz" v-if="!isHiddenup" :class="{ 'small-margin-left': isSmallMarginzuo, 'hiddenup': isHiddenup }">
        <!-- 添加课程属性选择索引 -->
        <div class="category-selector">
          <button @click="handleCategoryClick('all')" :class="{ 'active': selectedCategory === 'all' }">全部课程</button>
          <button @click="handleCategoryClick('science')" :class="{ 'active': selectedCategory === 'science' }">理学</button>
          <button @click="handleCategoryClick('engineering')" :class="{ 'active': selectedCategory === 'engineering' }">工学</button>
          <button @click="handleCategoryClick('literature')" :class="{ 'active': selectedCategory === 'literature' }">文学</button>
          <button @click="handleCategoryClick('law')" :class="{ 'active': selectedCategory === 'law' }">法学</button>
          <button @click="handleCategoryClick('philosophy')" :class="{ 'active': selectedCategory === 'philosophy' }">哲学</button>
          <button @click="handleCategoryClick('agriculture')" :class="{ 'active': selectedCategory === 'agriculture' }">农学</button>
          <button @click="handleCategoryClick('medicine')" :class="{ 'active': selectedCategory === 'medicine' }">医学</button>
          <button @click="handleCategoryClick('management')" :class="{ 'active': selectedCategory === 'management' }">管理学</button>
          <button @click="handleCategoryClick('history')" :class="{ 'active': selectedCategory === 'history' }">历史学</button>
          <button @click="handleCategoryClick('economics')" :class="{ 'active': selectedCategory === 'economics' }">经济学</button>
          <button @click="handleCategoryClick('education')" :class="{ 'active': selectedCategory === 'education' }">教育学</button>
          <button @click="handleCategoryClick('arts')" :class="{ 'active': selectedCategory === 'arts' }">艺术学</button>
        </div>
  
        <!-- 添加学校索引 -->
        <div class="university-selector">
          <button @click="handleUniversityClick('all')" :class="{ 'active': selectedUniversity === 'all' }">全部学校</button>
          <button @click="handleUniversityClick('cust')" :class="{ 'active': selectedUniversity === 'cust' }">长春理工大学</button>
          <button @click="handleUniversityClick('jlu')" :class="{ 'active': selectedUniversity === 'jlu' }">吉林大学</button>
          <button @click="handleUniversityClick('ccit')" :class="{ 'active': selectedUniversity === 'ccit' }">长春工业大学</button>
          <button @click="handleUniversityClick('nenu')" :class="{ 'active': selectedUniversity === 'nenu' }">东北师范大学</button>
          <button @click="handleUniversityClick('ccu')" :class="{ 'active': selectedUniversity === 'ccu' }">长春大学</button>
        </div>
  
        <!-- 添加8个白色的div，每个div内部有图片、课程名称和老师的名字 -->
        <div class="red-box-container" :class="{ 'four-per-row': !isSmallMarginzuo, 'three-per-row': isSmallMarginzuo }">
          <div class="red-box" v-for="(subject, index) in filteredSubjects" :key="index" @click="handleBoxClick(subject)">
            <div class="box-content">
              <div class="image-side">
                <img :src="getImageUrl(subject)" alt="Subject Image" class="subject-image" />
              </div>
              <div class="text-side">
                <div class="subject-name">{{ subject }}</div>
                <div class="teacher-name">{{ filteredTeachers[index] }}</div>
              </div>
            </div>
          </div>
          <div v-if="!hasFilteredSubjects" class="no-courses-message">
            请添加课程
          </div>
        </div>
        <!-- 添加搜索框和搜索按钮 -->
        <div class="search-container">
          <input type="text" v-model="searchQuery" placeholder="请输入内容...." class="search-box" />
          <button @click="performSearch" class="search-button">搜索</button>
        </div>
      </div>
    </transition>
      
    <div class="chat-container" :class="{ 'moved': isMoved, 'small-margin-left': isMarginLeftSmall }">
   
    <!-- 聊天消息容器 -->
       <div class="course-dropdown">
    <div class="course-label-and-menu">
       <p class="kecheng" @click="toggleVisibility">当前课程：{{ courseName }}
     <svg class="rotate-180"   xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z">
     </path></svg>
    </p>
      
    </div>
       </div>
      
   
   <div class="chat-messages" ref="chatMessages">
    <!-- 遍历消息数组，渲染每条消息 -->
       <div v-for="(message, index) in messages" :key="index" :class="['message', message.type]">
        <!-- 头像 -->
    <img :src="message.avatar" :alt="message.type" class="avatar" />
        <!-- 消息内容 -->
    <div class="message-content">
      {{ message.text }}
     </div>
        </div>
     
       </div>
    <!-- 输入框容器 -->
   <div class="chat-input">
       <div class="input-container">
    <!-- 输入框 -->
    <input v-model="newMessage" @keyup.enter="sendMessage" class="input" placeholder="请输入内容..." />
     
   <!-- 发送文件按钮 -->
    <div>
   <label for="file-upload" class="send-file-btn">
         <input id="file-upload" type="file" @change="handleFileUpload" style="display: none;" />
         <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256"><path fill="currentColor" d="m212.48 136.49l-82.06 82a60 60 0 0 1-84.85-84.88l98.16-97.89a40 40 0 0 1 56.56 56.59l-.17.16l-95.8 92.22a12 12 0 1 1-16.64-17.3l95.71-92.12a16 16 0 0 0-22.7-22.56l-98.16 97.86a36 36 0 0 0 50.93 50.91l82.06-82a12 12 0 0 1 17 17Z"></path></svg>
       </label>
      </div>
       <!-- 发送按钮 -->
        <button @click="sendMessage" class="send-btn"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256"><path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160ZM90.34 125.66a8 8 0 0 1 0-11.32l32-32a8 8 0 0 1 11.32 0l32 32a8 8 0 0 1-11.32 11.32L136 107.31V168a8 8 0 0 1-16 0v-60.69l-18.34 18.35a8 8 0 0 1-11.32 0"></path></svg></button>
    
   </div>
      </div>
     </div>
      
       
   </template>
    
    
   <script>
  export default {
    name: 'Chat',
    data() {
    return {
      messages: [
        { text: '智慧助教服务器', type: 'server', avatar: 'https://via.placeholder.com/40' },
      ],
      newMessage: '',
      isHidden: false,
      isMoved: false,
      isMove: false,
      isMarginLeftSmall: false,
      isSmallMarginzuo: false,
      isHiddenup: true,
      searchQuery: '',
      currentSearchQuery: '',
      subjects: ['高等数学（工）', '大学物理', '程序设计基础', '大学外语', '机器学习', '大学语文', '军事理论中国现代纲要', '形势与政策'],
      teachers: ['初颖', '张志颖', '唐锐', '任正玮', '刘喜广', '杨洋', '李兰婷', '孙兵'],
      courseName: '', // 修改: subject 改为 courseName
      isDropdownOpen: false,
      selectedCategory: 'all', // 新增数据属性
      categories: {
        all: ['高等数学（工）', '大学物理', '程序设计基础', '大学外语', '机器学习', '大学语文', '军事理论中国现代纲要', '形势与政策'],
        science: [ '大学物理', '机器学习'],
        engineering: ['高等数学（工）', '大学物理', '程序设计基础'],
        literature: ['大学语文', '形势与政策'],
        law: [],
        philosophy: [],
        agriculture: [],
        medicine: [],
        management: [],
        history: [],
        economics: [],
        education: [],
        arts: []
      },
      selectedUniversity: 'all', // 新增数据属性
      universities: {
        all: ['高等数学（工）', '大学物理', '程序设计基础', '大学外语', '机器学习', '大学语文', '军事理论中国现代纲要', '形势与政策'],
        cust: ['高等数学（工）', '大学物理', '程序设计基础', '大学外语', '机器学习', '大学语文', '军事理论中国现代纲要', '形势与政策'],
        jlu: [],
        ccit: [],
        nenu: [],
        ccu: []
      },
      
      isSettingsModalOpen: false,
      setting1: '',
      setting2: '',
      setting3: '',
      setting4: '',
      setting5: '',
      modelCategories: [],
      // 当前选中的对话框索引
      selectedDialogIndex: { today: null, weekly: null, monthly: null, earlier: null },
        // 对话框数据
        todayDialogs: ['新建对话1', '新建对话2'],
        weeklyDialogs: ['新建对话3', '新建对话4'],
        monthlyDialogs: ['新建对话5', '新建对话6'],
        earlierDialogs: ['新建对话7', '新建对话8'],
        isDialogSettingVisible: false, // 添加状态变量
        // 对话框设置面板显示状态
        dialogSettings: { today: {}, weekly: {}, monthly: {}, earlier: {} },
        selectedDialogs: { today: [], weekly: [], monthly: [], earlier: [] },
      
    };
    
  },
   methods: {
    openSettingsModal() {
      this.isSettingsModalOpen = !this.isSettingsModalOpen;
    },
    closeSettingsModal() {
      this.isSettingsModalOpen = false;
    },
    async sendMessage() {
      if (this.newMessage.trim() === '') return; // 如果消息为空，不发送
  
      // 添加用户消息到消息数组
      this.messages.push({ text: this.newMessage, type: 'user', avatar: 'https://via.placeholder.com/40' });
  
      // 清空输入框
      this.newMessage = '';
  
      // 模拟服务器响应
      await this.simulateServerResponse();
  
      // 滚动到聊天消息的底部
      this.$nextTick(() => {
        const chatMessages = document.querySelector('.chat-messages');
        if (chatMessages) {
          chatMessages.scrollTop = chatMessages.scrollHeight;
        }
      });
    },
    simulateServerResponse() {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.messages.push({ text: '回复内容', type: 'server', avatar: 'https://via.placeholder.com/40' });
          resolve();
        }, 1000);
      });
    },
    toggleZhong() {
      this.isHidden = !this.isHidden;
      this.isMarginLeftSmall = !this.isMarginLeftSmall;
      this.isSmallMarginzuo = !this.isSmallMarginzuo;
    },
    toggleMargin() {
      this.isMarginLeftSmall = !this.isMarginLeftSmall;
    },
    toggleMarginzuo() {
      this.isSmallMarginzuo = !this.isSmallMarginzuo;
    },
    toggleVisibility() {
      if (this.isHiddenup) {
        this.isHiddenup = false;
        this.$nextTick(() => {
          this.isDropdownOpen = true;
        });
      } else {
        this.isDropdownOpen = false;
        setTimeout(() => {
          this.isHiddenup = true;
        }, 100); // 动画持续时间为300ms
      }
    },
    getImageUrl(subject) {
      // 根据科目名称返回对应的图片URL
      // 这里假设图片文件名与科目名称相同，并且图片位于 public/images 文件夹中
      return `/images/${subject}.png`;
    },
    handleBoxClick(subject) {
      this.courseName = subject; // 修改: subject 改为 courseName
    },
    performSearch() {
      this.currentSearchQuery = this.searchQuery;
    },
    confirmGenerate() {
      if (this.setting1.trim() === '' || this.setting2.trim() === '') return; // 如果课程名称或教师名称为空，不生成
  
      // 添加新的课程和教师到数组中
      this.subjects.push(this.setting1);
      this.teachers.push(this.setting2);
  
      // 更新搜索查询以显示新添加的课程
      this.currentSearchQuery = this.setting1;
  
      // 清空输入框
      this.setting1 = '';
      this.setting2 = '';
  
      // 关闭设置弹窗
      this.closeSettingsModal();
    },
    handleCategoryClick(category) {
      this.selectedCategory = category;
    },
    handleUniversityClick(university) {
      this.selectedUniversity = university;
    },
    handleDialogClick(category, index) {
        if (category === 'today') {
          this.selectedDialogIndex.today = index;
          this.selectedDialogIndex.weekly = null;
          this.selectedDialogIndex.monthly = null;
          this.selectedDialogIndex.earlier = null;
        } else if (category === 'weekly') {
          this.selectedDialogIndex.weekly = index;
          this.selectedDialogIndex.today = null;
          this.selectedDialogIndex.monthly = null;
          this.selectedDialogIndex.earlier = null;
        } else if (category === 'monthly') {
          this.selectedDialogIndex.monthly = index;
          this.selectedDialogIndex.today = null;
          this.selectedDialogIndex.weekly = null;
          this.selectedDialogIndex.earlier = null;
        } else if (category === 'earlier') {
          this.selectedDialogIndex.earlier = index;
          this.selectedDialogIndex.today = null;
          this.selectedDialogIndex.weekly = null;
          this.selectedDialogIndex.monthly = null;
        }
        // 重置所有对话框的设置面板显示状态
        this.dialogSettings.today = {};
        this.dialogSettings.weekly = {};
        this.dialogSettings.monthly = {};
        this.dialogSettings.earlier = {};
  
        // 设置当前选中的对话框索引
        this.selectedDialogIndex[category] = index;
      },
  
      handleSettingClick(category, index) {
        console.log(`Setting clicked for ${category} dialog at index ${index}`);
        // 切换显示状态
        this.dialogSettings[category][index] = !this.dialogSettings[category][index];
      },
  
      toggleSelectDialog(category, index) {
        if (this.selectedDialogs[category].includes(index)) {
          this.selectedDialogs[category] = this.selectedDialogs[category].filter(i => i !== index);
        } else {
          this.selectedDialogs[category].push(index);
        }
      },
  
      // 添加编辑对话的方法
      editDialog(category, index) {
        console.log(`Edit dialog for ${category} at index ${index}`);
        // 在这里添加编辑对话的逻辑
      },
  
      // 添加删除对话的方法
      deleteDialog(category, index) {
        console.log(`Delete dialog for ${category} at index ${index}`);
        // 删除对话
        if (category === 'today') {
          this.todayDialogs.splice(index, 1);
        } else if (category === 'weekly') {
          this.weeklyDialogs.splice(index, 1);
        } else if (category === 'monthly') {
          this.monthlyDialogs.splice(index, 1);
        } else if (category === 'earlier') {
          this.earlierDialogs.splice(index, 1);
        }
        // 关闭设置面板
        this.dialogSettings[category][index] = false;
      },
  
      // 添加新的对话
      addNewDialog() {
        this.todayDialogs.unshift('新建对话'); // 将新对话添加到数组的开头
      },
    
  },
  computed: {
    filteredSubjects() {
      if (!this.currentSearchQuery) {
        return this.universities[this.selectedUniversity].filter(subject => this.categories[this.selectedCategory].includes(subject));
      }
      return this.universities[this.selectedUniversity].filter(subject =>
        subject.toLowerCase().includes(this.currentSearchQuery.toLowerCase())
      ).filter(subject => this.categories[this.selectedCategory].includes(subject));
    },
    filteredTeachers() {
      if (!this.currentSearchQuery) {
        const indices = this.filteredSubjects.map(subject => this.subjects.indexOf(subject));
        return indices.map(index => this.teachers[index]);
      }
      const filteredIndices = this.filteredSubjects.reduce((acc, subject, index) => {
        if (subject.toLowerCase().includes(this.currentSearchQuery.toLowerCase())) {
          acc.push(index);
        }
        return acc;
      }, []);
      return filteredIndices.map(index => this.teachers[this.filteredSubjects.indexOf(this.filteredSubjects[index])]);
    },
    hasFilteredSubjects() {
      return this.filteredSubjects.length > 0;
    },
  
  },
  
  
  
  mounted() {
    if (this.categories.all.length > 0) {
      this.courseName = this.categories.all[0]; // 修改: subject 改为 courseName
    }
  }
  };
  </script>
   
   <style scoped>
   
   .toggle-margin-btn {
    position: fixed;
    bottom: 20px;
    left: 20px;
    cursor: pointer;
    background-color: #fafcfd;
    padding: 10px;
    border-radius: 50%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
   }
   
   .toggle-margin-btn:hover {
    transform: scale(1.1);
   }
   
   
   .zuo {
    width: 110px;
    height: 1140px;
    background-color: #D9D9D9;
    position: fixed;
    top: -215px;
    left: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    z-index: 1;
    border-radius: 2px 24px 11px 16px;
    box-shadow: 1px -51px 11px rgba(0, 0, 0, 0.1);
   }
   
   .sidebar-btn {
    width: 76px;
    height: 71px;
    /* 增加高度以容纳图标和文字 */
    margin: -3px;
    padding: 0px;
    border: none;
    border-radius: 5px;
    background-color: #D9D9D9;
    color: black;
    cursor: pointer;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    
   }
  
  .zjsz{
  position: relative;
  left: 1%;
  top: -1%;
  
  }
  .zjsz1{
  position: relative;
  left: 0%;
  top: 28%;
  }
  
  .cpfk{
  position: relative;
  left: 1%;
  top: -1%;
  
  }
  .cpfk1{
  position: relative;
  left: 0%;
  top: 28%;
  }
  
  .gxxt{
  position: relative;
  left: 1%;
  top: -1%;
  
  }
  .gxxt1{
  position: relative;
  left: 0%;
  top: 28%;
  }
  
  .wzjx{
  position: relative;
  left: 1%;
  top: -1%;
  
  }
  
  .wzjx1{
  position: relative;
  left: 0%;
  top: 28%;
  }
  
  
   .zjsz svg{
     position: absolute;
     left: 34%;
     top: 12%;
  
   }
  
   .cpfk svg{
     position: absolute;
     left: 34%;
     top: 12%;
  
   }
  
   .gxxt svg{
     position: absolute;
     left: 34%;
     top: 12%;
  
   }
   
  .wzjx svg{
     position: absolute;
     left: 34%;
     top: 12%;
   } 
   .grzx {
    position: absolute;
    bottom: 15px;
    left: 41px;
   border: none;
   cursor: pointer;
   align-items: center;
   justify-content: center;
   width: 34px;
   height: 33px;
   border-radius: 78%;
   background-color: #FFFFFF;
   }
  
   
   
   .sidebar-btn:hover,
   .sidebar-btn.active { 
    background-color: #FFFFFF;
    color: BLACK;
    /* position: absolute;
    left: 50%;
    top: 50%;  */
   }
   
   .touxiang{
   position: relative;
   bottom: 0px;
   }
   
   .zhong {
    margin-left: 110px;
    /* 确保中间栏紧贴左侧栏 */
    width: 224px;
    /* 设置中间栏宽度为 300px */
    padding: 20px;
    background-color: #F0F0F0;
    position: fixed;
    left: 0px;
    top: 0;
    bottom: 0;
    z-index: 0;
    /* 确保中间栏在左侧栏下方 */
    transition: margin-left 0.3s ease;
   }
   
   .new-dialog-btn {
   background-color: #E6EDF8; /* 框内颜色 */
   color: #3366FF; /* 字体颜色 */
   border: 1px solid #3366FF; /* 外边框颜色 */
   padding: 5px 10px; /* 内边距 */
   border-radius: 15px; /* 圆角 */
   cursor: pointer; /* 鼠标指针样式 */
   font-size: 14px; /* 字体大小 */
   width: 165px;
   height: 50px;
   position: absolute;
   top: 30px;
   left: 19px;
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
   text-align: center; /* 文字居中 */
   line-height: 40px; /* 垂直居中 */
  }
  
   
   .new-dialog-btn:hover {
    background-color: #D9E5F3;
    /* 鼠标悬停时的框内颜色 */
   }
   
   .new-dialog-btn:hover {
    background-color: #D9E5F3;
    /* 鼠标悬停时的框内颜色 */
   }
   
   .zhong.hidden {
    margin-left: -300px;
    /* 隐藏中间栏 */
   }
   
   .toggle-btn {
    position: fixed;
    top: 50%;
    left: 365px;
    /* 初始按钮位置 */
    cursor: pointer;
    /* background-color: #fafcfd; */
    height: 60px;
    width: 30px;
    padding: 5px;
    /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
    transition: left 0.3s ease, transform 0.3s ease;
    display: flex;
    /* 使用 Flexbox 布局 */
    align-items: center;
    /* 垂直居中 */
    justify-content: center;
    /* 水平居中 */
   color: #D9D9D9;
   z-index: 20;
   }
   
   .toggle-btn.hidden {
    left: 110px;
    /* 按钮移动到左侧栏旁边 */
   }
   
   .toggle-btn.mirrored svg {
    transform: rotateY(180deg);
    /* 镜像图标 */
   }
   
   .zhong-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   }
   
   
   .kecheng{
   font-size: 22px;
   text-align: center;
   color: #00000063;
   }
   .rotate-180 {
   position: absolute;
   left: 58%;
   top: 23%;
  }
  
   
   .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 50%; /* 水平居中 */
    transform: translateX(-50%); /* 水平居中偏移 */
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    width: 200px; /* 设置下拉菜单的宽度 */
    /* height: 500px; */
   }
   
   .dropdown-menu button {
    display: block;
    width: 100%;
    padding: 8px 16px;
    text-align: left;
    cursor: pointer;
    border: none;
    background-color: transparent;
   }
   
   .dropdown-menu button:hover {
    background-color: #f0f0f0;
   }
   
   .chat-container {
    display: flex;
    /* 使用 Flexbox 布局 */
    flex-direction: column;
    /* 垂直排列子元素 */
    height: 99vh;
    /* 高度占满整个视口 */
    background-color: #fafcfd;
    margin: 0 auto;
    /* 水平居中 */
    /* border:solid #ccc; */
    /* 边框 */
    border-radius: 20px;
    /* 圆角 */
    overflow: hidden;
    /* 隐藏溢出内容 */
    margin-left: 355px;
    /* 为左侧栏留出空间 */
    margin-top: -29px;
    margin-bottom: 0px;
    width: 1327px;
    transition: margin-left 0.3s ease;
    transition: width 0.1s ease;
   }
   
   .chat-container.small-margin-left {
    margin-left: 110px; /* 根据需要调整 */
    width: 1520px;
   }
   
   .course-dropdown {
    position: relative;
    display: inline-block;
    width: 100%; /* 确保容器宽度占满父容器 */
    text-align: center; /* 确保文本居中 */
   }
   
   .course-label-and-menu {
    display: flex;
    justify-content: center; /* 子元素水平居中 */
    align-items: center; /* 子元素垂直居中 */
    flex-direction: column; /* 垂直排列子元素 */
   }
   
   .kecheng {
    cursor: pointer;
    margin: 0; /* 去除默认的段落间距 */
    font-size: 18px; /*字体大小*/
   text-align: center;
   color: #00000063;
   }
   
   .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 50%; /* 水平居中 */
    transform: translateX(-50%); /* 水平居中偏移 */
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    width: 200px; /* 设置下拉菜单的宽度 */
   }
   
   .dropdown-menu button {
    display: block;
    width: 100%;
    padding: 8px 16px;
    text-align: left;
    cursor: pointer;
    border: none;
    background-color: transparent;
   }
   
   .dropdown-menu button:hover {
    background-color: #f0f0f0;
   }
   
   .chat-messages {
   
    flex: 1;
    /* 占据剩余空间 */
    padding: 10px;
    /* 内边距 */
    overflow-y: auto;
    /* 垂直滚动 */
    background-color: #fafcfd;
    /* 背景颜色 */
   }
   
   .message {
    margin: 5px 201px;
    /* 上下外边距 */
    padding: 10px;
    /* 内边距 */
    border-radius: 8px;
    /* 圆角 */
    max-width: 70%;
    /* 最大宽度 */
    display: flex;
    /* 使用 Flexbox 布局 */
    align-items: flex-start;
    /* 子元素垂直对齐方式 */
   }
   
   .message.user {
    align-self: flex-end;
    /* 自身对齐方式为右侧 */
    flex-direction: row-reverse;
    /* 子元素反向排列 */
    margin-right: 0;
    /* 右侧外边距为 0 */
   }
   
   .message.server {
    align-self: flex-start;
    /* 自身对齐方式为左侧 */
    flex-direction: row;
    /* 子元素正常排列 */
   }
   
   .avatar {
    width: 40px;
    /* 宽度 */
    height: 40px;
    /* 高度 */
    border-radius: 50%;
    /* 圆形 */
    margin-right: 10px;
    /* 右侧外边距 */
   }
   
   .message.user .avatar {
    margin-left: 10px;
    /* 左侧外边距 */
    margin-right: 0px;
    /* 右侧外边距为 0 */
   }
   
   .message-content {
    background-color: #dcf8c6;
    /* 背景颜色 */
    padding: 10px;
    /* 内边距 */
    border-radius: 8px;
    /* 圆角 */
    max-width: 80%;
    /* 最大宽度 */
    word-wrap: break-word;
    /* 长单词换行 */
    overflow-wrap: break-word;
    /* 长单词换行 */
    flex: 1;
    /* 占据剩余空间 */
   }
   
   .message.user .message-content {
    background-color: #36f;
    color: #fff;
    /* 背景颜色 */
   
    
    align-self: flex-end;
    /* 自身对齐方式为右侧 */
   }
   
   .message.server .message-content {
    background-color: #ffffff;
    /* 背景颜色 */
    align-self: flex-start;
    /* 自身对齐方式为左侧 */
   }
   
   .chat-input {
    display: flex;
    /* 使用 Flexbox 布局 */
    justify-content: center;
    /* 水平居中 */
    padding: 10px;
    /* 内边距 */
    background-color: #fafcfd;
    /* 背景颜色 */
   }
   
   .input-container {
    position: relative;
    /* 相对定位 */
    width: 700px;
    /* 宽度 */
    height: 66px;
    /* 高度 */
    box-shadow: 0 8px 18px rgba(12, 12, 12, 0.1);
    /* 阴影 */
    border-radius: 35px;
    /* 圆角 */
    overflow: hidden;
    /* 隐藏溢出内容 */
    display: flex;
    /* 使用 Flexbox 布局 */
    align-items: center;
    /* 子元素垂直对齐方式 */
   }
   
   .input {
   
    width: 100%;
    /* 宽度占满父容器 */
    height: 100%;
    /* 高度占满父容器 */
    border: none;
    /* 无边框 */
    outline: none;
    /* 无轮廓 */
    padding: 0 54px;
    /* 内边距 */
    box-sizing: border-box;
    /* 盒模型包含内边距和边框 */
    background-color: transparent;
    /* 背景透明 */
    font-size: 16px;
    /* 字体大小 */
    color: #333;
    /* 字体颜色 */
   }
   
   .send-btn {
   position: absolute;
   right: 10px;
   top: 50%;
   transform: translateY(-50%);
   border: none;
   background-color: transparent;
   font-size: 16px;
   cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: center;
   width: 49px;
   height: 34px;
   border-radius: 42%;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
   transition: all 0.3s ease;
  }
  .send-file-btn {
   position: absolute;
   top: 30%;
   left: 87%;
   
  }
  
   
   .geren {
    position: absolute;
    top: 1243px;
    left: -13px;
   }
   
   .shoushuo {
   position: absolute;
   left: 201px;
   top: 44px;
   background-color: #D9D9D9; /* 圆圈背景颜色 */
   border-radius: 50%; /* 圆角 */
   width: 25px;
   height: 25px;
   display: flex;
   align-items: center;
   justify-content: center;
  }
  
   .cang {
    position: absolute;
    top: 878px;
    left: 28px;
    width: 68%;
    height: 4%;
    background-color: #f0f0f0f0;
    box-shadow: 0px -2px 0px rgba(0, 0, 0, 0.1);
   }
   
   .sidebar-btn.cang {
    flex-direction: row; /* 改为水平排列 */
    align-items: center; /* 垂直居中对齐 */
    /* width: 68%;
    height: 4%;
    background-color: #f0f0f0f0;
    box-shadow: 0px -2px 0px rgba(0, 0, 0, 0.1); */
   }
   
   .sidebar-btn.cang svg {
    margin-right: 5px; /* 图标和文字之间的间距 */
    transform: rotate(90deg);
   }
   .sidebar-btn.cang .icon {
   width: 20px;
   height: 20px;
   fill: #999; /* 浅灰色 */
   filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1)); /* 浅立体效果 */
  }
   
   
   
   
   
   
   .settings-modal {
    display: block; /* 显示模态框 */
    position: fixed; /* 固定位置 */
    z-index: 100; /* 坐在内容之上 */
    right: -42px;
    top: 0;
    width: 96%; /* 宽度为屏幕的一半 */
    height: 100%; /* 高度为全屏 */
    background-color: #fafcfd
   
   }
   
   .modal-content {
    background-color: #fefefe;
    margin: 0px; /* 边距 */
    padding: 20px;
    /* border: 1px solid #888; */
    height: 100%;
    width: 60%;
    position: absolute;
    left: 17%;
    
   }
   
   .settings-header {
     width: 70%;
     height: 100%;
     padding: 185px;
   }
  
   .close-btn {
    /* color: #aaa; */
    float: right;
    font-size: 28px;
    font-weight: bold;
    position: absolute;
    left: 118%;
    top: 7%;
    height: 100%;
    width: 100%;
   }
   
  
   .close-btn:hover,
   .close-btn:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
   }
   .modal-content input[type="text"]
   {
   width: 78%;
   padding: 10px;
   margin-bottom: 20px;
   box-sizing: border-box;
  }
  
  .modal-content input[type="file"] {
   width: 100%;
   height: 100px;
   padding: 10px;
   margin-bottom: 20px;
   box-sizing: border-box;
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
  }
  select {
    width: 78%;
    height: 34px;
  }
  
  
  .modal-content button {
   width: 100%;
   padding: 10px;
   background-color: #007bff;
   color: white;
   border: none;
   cursor: pointer;
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
  }
  
  .modal-content button:hover {
   background-color: #0056b3;
  }
  
  
  
  
  .category-selector {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  .category-selector button {
    padding: 10px 20px;
    margin: 0 10px;
    border: none;
    border-radius: 5px;
    background-color: #f0f0f0;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .category-selector button.active {
    background-color: #007bff;
    color: white;
  }
  
  .university-selector {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  .university-selector button {
    padding: 10px 20px;
    margin: 0 10px;
    border: none;
    border-radius: 5px;
    background-color: #f0f0f0;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .university-selector button.active {
    background-color: #007bff;
    color: white;
  }
  
  
  
  .category-selector {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  .category-selector button {
    padding: 10px 20px;
    margin: 0 10px;
    border: none;
    border-radius: 5px;
    background-color: #f0f0f0;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .category-selector button.active {
    background-color: #007bff;
    color: white;
  }
  
  .university-selector {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  .university-selector button {
    padding: 10px 20px;
    margin: 0 10px;
    border: none;
    border-radius: 5px;
    background-color: #f0f0f0;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .university-selector button.active {
    background-color: #007bff;
    color: white;
  }
  
  
  .kcxz {
   position: absolute;
   display: flex;
   /* 使用 Flexbox 布局 */
   flex-direction: column;
   /* 垂直排列子元素 */
   height: 93vh;
   /* 高度占满整个视口 */
   background-color: #fafcfd;
   margin: 0 auto;
   /* 水平居中 */
   border-radius: 20px;
   /* 圆角 */
   overflow: hidden;
   /* 隐藏溢出内容 */
   margin-left: 450px;
   /* 为左侧栏留出空间 */
   margin-top: 35px;
   margin-bottom: 0px;
   width: 1220px;
   transition: margin-left 0.3s ease, width 0.1s ease, transform 0.3s ease, opacity 0.3s ease;
   z-index: 10;
  }
  
  .kcxz.small-margin-left {
   margin-left: 120px;
   width: 1520px;
  }
  
  .kcxz.hiddenup {
   transform: translateY(-100%);
   opacity: 0;
  }
  
  .red-box-container {
   display: flex;
   flex-wrap: wrap;
   justify-content: left;
  }
  
  .red-box {
   width: 300px;
   height: 150px;
   margin: 30px;
   position: relative;
   background-color: white; /* 改为白色 */
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* 添加阴影效果 */
   border-radius: 10px; /* 可选：添加圆角 */
   cursor: pointer; /* 添加鼠标指针样式 */
  }
  
  .box-content {
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: flex-start; /* 文字靠右对齐 */
  }
  
  .image-side {
   width: 40%; /* 图片占据40%宽度 */
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
  }
  
  .subject-image {
   max-width: 100%;
   max-height: 100%;
  }
  
  .text-side {
   width: 60%; /* 文字占据60%宽度 */
   display: flex;
   flex-direction: column;
   align-items: left;
   justify-content: left;
   text-align: left;
  }
  
  .subject-name {
   font-size: 24px;
   color: black; /* 文字颜色改为黑色 */
  }
  
  .teacher-name {
   font-size: 16px;
   color: gray; /* 老师名字颜色改为灰色 */
   margin-top: 5px; /* 添加一些间距 */
  }
  
  .search-container {
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 100px;
   position: absolute;
   bottom: 0px;
  }
  
  .search-box {
   width: 61%;
   padding: 10px;
   border: 1px solid #ccc;
   border-radius: 8px;
   font-size: 16px;
   position: relative;
   bottom: 0px;
   box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
  }
  
  .search-button {
   width: 21%;
   padding: 10px;
   border: none;
   border-radius: 8px;
   background-color: #007bff;
   color: white;
   font-size: 16px;
   cursor: pointer;
   position: relative;
   bottom: 0px;
  }
  
  .search-button:hover {
   background-color: #0056b3;
  }
  
  
  
  
  
  .duihuaxuanze {
    width: 100%;
    height: 30px;
    background-color: #F0F0F0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    padding: 0 10px;
  }
  
  .duihuaxuanze.selected {
    background-color: #D9D9D9;
    color: #3366FF;
  }
  
  .dialog-text {
    text-align: left;
    flex-grow: 1;
  }
  
  .setting-btn {
    background-color: transparent; /* 修改: 设置背景颜色为透明 */
    color: black; /* 字体颜色 */
    border: none; /* 删除: 删除边框 */
    padding: 5px 10px; /* 内边距 */
    border-radius: 0; /* 删除: 删除圆角 */
    cursor: pointer; /* 鼠标指针样式 */
    font-size: 12px; /* 字体大小 */
    transition: background-color 0.3s, color 0.3s;
    position: absolute;
    left: 80%;
  }
  
  
  
  .dialog-settings {
    position: relative;
    left: 80px;
    top: 0;
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 10;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  
  .dialog-settings button {
    background-color: transparent; /* 修改: 设置背景颜色为透明 */
    /* color: #3366FF; 字体颜色 */
    border: none; /* 删除: 删除边框 */
    padding: 5px 10px; /* 内边距 */
    border-radius: 0; /* 删除: 删除圆角 */
    cursor: pointer; /* 鼠标指针样式 */
    font-size: 12px; /* 字体大小 */
    transition: background-color 0.3s, color 0.3s;
  }
  
  .dialog-settings button:hover {
    background-color: #E6EDF8; /* 修改: 鼠标悬停时的背景颜色 */
  }
  
  .dialog-settings button:last-child {
    color: #ff0000; /* 修改: 设置删除按钮的文字颜色为 #ff0000 */
  }
  
   </style>.
<template>
  <div class="footer">
    <ul>
      <li>
        <a href="/luke-askew.pdf">R&eacute;sum&eacute;</a>
      </li>

      <li>
        <a href="https://github.com/LukeAskew/lukeaskew.com">View Source</a>
      </li>
    </ul>
  </div>
</template>


<style scoped>
.footer {
  position: relative;
  max-width: 60rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 2rem;
  padding-right: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.footer::before {
  content: '';
  display: block;
  width: 5rem;
  height: 1px;
  background-color: #aaa;
}

.footer ul {
  margin: 1rem 0 0 0;
  padding: 0;
  list-style-type: none;
  font-size: 0.875rem;
}

.footer ul li {
  display: inline-block;
  margin-right: 1em;
}
</style>

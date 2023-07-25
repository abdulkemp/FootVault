<template>
  <div class="back">
    <div class="top">
      <div class="block"></div>
    </div>
    <div class="admin">
      <div class="admin-user">
        <table class="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="lined">
      <div class="inline"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.top {
  width: 100%;
  height: 11vh;
  display: flex;
  justify-content: end;
  align-items: center;
  padding-right: 0.7rem;
  background: linear-gradient(100deg, #1c1c1c, #3f3820, #1c1c1c, #3f3820);
  background-size: 400% 400% !important;
  animation: lining 2s ease infinite;
}

.back {
  background: linear-gradient(100deg, #1c1c1c, #302a18, #1c1c1c, #302a18);
  background-size: 400% 400% !important;
  animation: lining 2s ease infinite;
  height: 100vh;
}

.block {
  width: 3.4rem;
  height: 2.6rem;
  border-radius: 5px 5px 5px 5px;
  background: linear-gradient(100deg, #1c1c1c, #403820, #1c1c1c, #403820);
  background-size: 400% 400% !important;
  animation: lining 2s ease infinite;
}
.admin {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* width: 100%; */
  /* height: 100%; */
}

.admin h1 {
  text-decoration: underline;
}

.admin-user {
  width: 85%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
}
table {
  margin-top: 1rem;
}
th {
  height: 3rem;
  border: 1px solid black;
  background: linear-gradient(100deg, #1c1c1c, #3f3820, #1c1c1c, #3f3820);
  background-size: 400% 400% !important;
  animation: lining 2s ease infinite;
}
td {
  height: 3.9rem;
  border: 1px solid black;
  background: linear-gradient(100deg, #1c1c1c, #3f3820, #1c1c1c, #3f3820);
  background-size: 400% 400% !important;
  animation: lining 2s ease infinite;
}

@keyframes lining {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>

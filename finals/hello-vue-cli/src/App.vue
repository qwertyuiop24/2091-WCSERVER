<template>
  <div class="resume">
    <div id="pic">
      <img :src="require('./assets/about.jpg')" />
    </div>
    <h1>{{ name }}</h1>
    <h3>{{ jobTitle }}</h3>
    <hr />
    <h4>Summary</h4>
    <p>{{ summary }}</p>
    <h4>Skills</h4>
    <ul>
      <li v-for="skill in skills" :key="skill">{{ skill }}</li>
    </ul>
    <h4>Education</h4>
    <div v-for="education in educations" :key="education.school">
      <h5>{{ education.school }}</h5>
      <h6>{{ education.degree }}</h6>
      <p>{{ education.startDate }} - {{ education.endDate }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Resume',
  data() {
    return {
      name: 'Aron Layson',
      jobTitle: 'Web Developer',
      summary:
        'A 2nd year student of Holy Angel University majoring in Web Development. Currently studying related to Web Developing and other languages in coding.',
      skills: [
        'HTML/CSS',
        'JavaScript',
        'Python',
        'Vue.js',
        'Node.js',
        'PHP',
        'MySQL',
        'Git',
      ],
      educations: [
        {
          school: 'Anderson Elementary School',
          degree: 'Elementary',
          startDate: 'June 2006',
          endDate: '2012',
        },
        {
          school: 'Holy Angel University',
          degree: 'Junior High School',
          startDate: 'June 2012',
          endDate: '2016',
        },
        {
          school: 'Holy Angel University',
          degree: 'Senior High School',
          startDate: 'June 2018',
          endDate: '2021',
        },
        {
          school: 'Holy Angel University',
          degree: 'Bachelor of Science in Web Development',
          startDate: 'July 2021',
          endDate: 'Present',
        },
      ],
    };
  },
};
</script>

<style>
* {
  background-color: antiquewhite;
}

img {
  width: 100px;
  height: 150px;
  border-radius: 25px;
  border: 2px solid #eabeb4;
  padding: 20px;
  margin: auto;
  float: right;
}
.resume {
  margin: 2rem;
}

.resume h1 {
  font-size: 3rem;
  margin: 0 0 0.5rem;
}

.resume h3 {
  font-size: 1.5rem;
  margin: 0 0 1rem;
}

.resume h4 {
  font-size: 1.25rem;
  margin: 1.5rem 0 0.5rem;
}

.resume h5 {
  font-size: 1.2rem;
  margin: 1rem 0 0.5rem;
}

.resume h6 {
  font-size: 1rem;
  margin: 0 0 0.5rem;
}

.resume p {
  margin: 0;
}

.resume ul {
  list-style: disc;
  margin: 0;
}

.resume li {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
}
</style>

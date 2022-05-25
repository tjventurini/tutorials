<template>
    <form @submit.prevent="handleSubmit">
        <label>Email:</label>
        <input type="email" required v-model="email" />
        <label>Password:</label>
        <input type="password" required v-model="password" />
        <div class="error" v-if="passwordError">{{ passwordError }}</div>

        <label>Role:</label>
        <select v-model="role">
            <option value="">Please select</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
        </select>

        <label>Skills</label>
        <input type="text" v-model="tempSkill" @keyup="addSkill" />
        <div
            v-for="skill in skills"
            :key="skill"
            @click="deleteSkill(skill)"
            class="pill"
        >
            {{ skill }}
        </div>

        <div class="terms">
            <input type="checkbox" required v-model="terms" />
            <label>Accept terms and conditions</label>
        </div>

        <div>
            <input type="checkbox" v-model="names" value="Thomas" />
            <label>Thomas</label>
        </div>
        <div>
            <input type="checkbox" v-model="names" value="Shaun" />
            <label>Shaun</label>
        </div>
        <div>
            <input type="checkbox" v-model="names" value="Mario" />
            <label>Mario</label>
        </div>

        <div class="submit">
            <button>Create account</button>
        </div>
    </form>
    <p>Email: {{ email }}</p>
    <p>Password: {{ password }}</p>
    <p>Role: {{ role }}</p>
    <p>Terms: {{ terms }}</p>
    <p>Name: {{ names }}</p>
    <p>Skills: {{ skills }}</p>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            role: '',
            terms: false,
            names: [],
            tempSkill: '',
            skills: [],
            passwordError: '',
        }
    },
    methods: {
        addSkill(e) {
            if (e.key === ',' && this.tempSkill) {
                let skillToAdd = this.tempSkill.replace(/,/g, '')
                if (!this.skills.includes(skillToAdd)) {
                    this.skills.push(skillToAdd)
                }
                this.tempSkill = ''
            }
        },
        deleteSkill(skill) {
            this.skills.splice(this.skills.indexOf(skill), 1)
        },
        handleSubmit(e) {
            // validate password
            this.passwordError = (this.password.length > 3) ? '' : 'Password must be at least 4 characters'

            if (!this.passwordError) {
                console.log('email', this.email)
                console.log('password', this.password)
                console.log('role', this.role)
                console.log('names', this.names)
                console.log('skills', this.skills)
                console.log('terms', this.terms)
            }
        }
    }
}
</script>

<style scoped>
form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}
label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}
input,
select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}
input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
}
.pill {
    display: inline-block;
    padding: 6px 12px;
    margin: 20px 10px 0 0;
    border-radius: 20px;
    background: #eee;
    cursor: pointer;
    font-weight: bold;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
}
button {
    background: rgb(123, 207, 235);
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
}
.submit {
    text-align: center;
}
.error {
    color: red;
    font-size: 10px;
    padding: 5px;
    font-weight: bold;
}
</style>
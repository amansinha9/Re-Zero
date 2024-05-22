const Category = "Isekai" //Genre
const Seasons = 2
const Interesting = true
const Overall = ["Isekai", 2, true]

const Genre = typeof Interesting

const FamilyAge = [58, 52, 28, 26, 23]
const TotalFA = FamilyAge[0] + FamilyAge[1] + FamilyAge[2] + FamilyAge[3] + FamilyAge[4]
const FamilyMembers = 5

console.log("Sum of Family Age is", TotalFA)
console.log("No. of Family members is", FamilyMembers)

const AverageAge = TotalFA / FamilyMembers
console.log(AverageAge)


console.log(Seasons)
console.log(Category)
console.log(Interesting)
console.log(Genre)
console.log(Overall)

let episodes = 15

function NoOfEpisodes(incrementBy, multiplyBy) {
    return (episodes + incrementBy) * multiplyBy
}

const NewEpisodes = NoOfEpisodes(10, 5)

console.log(episodes, NewEpisodes)

let myFamily = []

function familyMembers(Family) {
    myFamily.push(Family)     //push to add at the end and unshift to add at the front
    console.log(myFamily)
}

familyMembers('Papa')
familyMembers('Maa')
familyMembers('Bhaiya')
familyMembers('Roushan')

for(let i=0;i<10;i++) {
    console.log(i)
}
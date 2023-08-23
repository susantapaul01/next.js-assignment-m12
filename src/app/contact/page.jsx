import React from 'react'

const contact = () => {
  return (
    <>
    <section>
        <div className='bg-orange-100 pl-5'>
          <h1 className='py-3 text-start'>Basic Form</h1>
        </div>
    </section>
    <section className='bg-orange-100 pl-5 mt-3'>
        <form action="" method="post">
          <table className='table'>
            <tbody>
                <tr className="bg-orange-400 my-4 p-3">
                  <td><label for="yourName">Name:</label></td>
                  <td><input type="text" id="yourName" name="name" /></td>
                </tr>
                <tr>
                  <td><label for="email">Your Email:</label></td>
                  <td><input type="mail" id="email" name="email" /></td>
                </tr>
                <tr>
                  <td><label for="website">Your Website:</label></td>
                  <td><input type="mail" id="website" name="website" /></td>
                </tr>
                <tr>
                  <td><label for="message">Your message:</label></td>
                  <td><input type="mail" id="message" name="message" /></td>
                </tr>
              </tbody>
          </table>
          <button type="submit">Submit</button>
        </form>
    </section>
    </>
  )
}

export default contact
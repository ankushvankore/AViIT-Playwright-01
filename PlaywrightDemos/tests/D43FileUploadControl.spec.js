import test from "@playwright/test";

test("Handling File Upload Control", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/?m=1");

    let fileUpload1 = page.locator("#singleFileInput");
    let fileUpload2 = page.locator("#multipleFilesInput");

    await fileUpload1.scrollIntoViewIfNeeded();

    await fileUpload1.setInputFiles("Files\\JavaScript_Strings_Assignments.txt");

    //For uploading multiple files, you need to pass the file name in an array format
    await fileUpload2.setInputFiles(["Files\\JavaScript_Strings_Assignments.txt", "Files\\Object Assignment.txt"])

    console.log("Text: " + await fileUpload1.inputValue());

    await page.waitForTimeout(5000);
})
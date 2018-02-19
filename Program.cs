using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;

namespace JsParsing
{
    public class Program
    {
        public static void Main()
        {

            //   string path = @"c:\Prosonna\Protractor\preliminary_payment_reports.js";
            //   string readText = File.ReadAllText(path);
            ////   Console.WriteLine(readText);
            //   string pattern = @"describe\('[^']*', function \(\) {.*?it\('([^']*)-Expected result-([^']*)',";



            //   RegexOptions options = RegexOptions.Multiline | RegexOptions.Singleline;
            //   int count = 0;
            //   foreach (Match m in Regex.Matches(readText, pattern, options))
            //   {
            //       ++count;
            //       Console.WriteLine("Test No : " + count);
            //       Console.WriteLine("Test-Case: " + m.Groups[1].Value);
            //       Console.WriteLine("Expected Result: " + m.Groups[2].Value);

            //   }


            string path = @"c:\Prosonna\tasnima\Data Maintenance_Program Product - Formula Associations.js";
            string readText = File.ReadAllText(path);
            var csv = new StringBuilder(); 

            RegexOptions options = RegexOptions.Multiline | RegexOptions.Singleline;
          
            string[] describes = Regex.Split(readText, @"describe");
            int describeCount = 0;
            foreach (string itemList in describes)
            {
                
                string pattern1 = @"\('([^']*)', function \(\) {";
                string describe = "";
                int count1 = 0;
                foreach (Match m1 in Regex.Matches(itemList, pattern1, options))
                {
                    describeCount++;
                    Console.WriteLine("Describe: " + m1.Groups[1].Value);
                    describe = m1.Groups[1].Value;
                    csv.AppendLine(describeCount + "|"+  describe);
                    break;
                }
                //Console.WriteLine(itemList);

                string pattern2 = @".*?it\('([^']*) -EXPECTED RESULT- ([^']*)',";

                int count = 0;
                foreach (Match m2 in Regex.Matches(itemList, pattern2, options))
                {
                    List<string> row = new List<string>();
                    ++count;
                    Console.WriteLine("Test No : " + count);
                    Console.WriteLine("Test-Case: " + m2.Groups[1].Value);
                    Console.WriteLine("Expected Result: " + m2.Groups[2].Value);
                    //row.Add(describe);
                    row.Add("||");
                    row.Add(count.ToString());
                    row.Add(m2.Groups[1].Value);
                    row.Add(m2.Groups[2].Value);
                    csv.AppendLine(string.Join("|", row));
                    
                }
                
                

                

            }
            File.WriteAllText(".\\Output.csv", csv.ToString());

            Console.ReadLine();
        }


    }
}
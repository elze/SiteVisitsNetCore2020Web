using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SiteVisitsNetCore2020Web.Data;
using SiteVisitsNetCore2020Web.Models;
using SiteVisitsNetCore2020Web.Services;

namespace SiteVisitsNetCore2020Web.Controllers
{
    //[Route("visitsnc3ng/api/[controller]")]
    [Route("api/[controller]")]
    [ApiController]
    public class VisitsController : ControllerBase
    {
        private readonly SiteVisitsNetCore2020WebContext _context;
        private readonly IVisitsService _visitsService;

        public VisitsController(SiteVisitsNetCore2020WebContext context, IVisitsService visitsService)
        {
            _context = context;
            _visitsService = visitsService;
        }

        // GET: api/Visits
        [HttpGet]
        //public async Task<ActionResult<IEnumerable<Visit>>> GetVisit()
        //public async Task<ActionResult<IEnumerable<VisitFlat>>> GetVisit()
        public async Task<List<VisitFlat>> GetVisit()
        {
            var visits = _context.Visit
                //.Where(v => !string.IsNullOrEmpty(v.SeTerm) && !v.SeTerm.Contains("Encrypted Search") 
                //|| v.ExtractedTerms.Count > 0
                //)
                .Include(v => v.IpAddress)
                    .ThenInclude(i => i.City).ThenInclude(c => c.Region).ThenInclude(r => r.Country)
                .Include(v => v.IpAddress)
                    .ThenInclude(i => i.Isp)
                //.Include(v => v.IpAddress)
                  // .ThenInclude(i => i.Visitor)
                .Include(v => v.ExtractedTerms)
                .Include(v => v.PageUrl)
                .Include(v => v.PageUrlVariation)
                .Include(v => v.PageTitle)
                .Include(v => v.PageTitleVariation)
                .Include(v => v.CameFrom)
                .OrderByDescending(v => v.VisitDatetime);
            //.ToListAsync();
            //return visits;

            var flatVisits = visits.Select(v => new VisitFlat
            {
                Id = v.Id,
                VisitDatetime = v.VisitDatetime,
                NumberOfTimes = v.NumberOfTimes,
                IpAddress = v.IpAddress.IpV4Address,
                City = v.IpAddress.City != null ? v.IpAddress.City.Name : "",
                Region = v.IpAddress.Region != null ? v.IpAddress.Region.Name : "",
                Country = v.IpAddress.Country != null ? v.IpAddress.Country.Name : "",
                Location = _visitsService.GetLocation(v.IpAddress),
                CombinedTerms = _visitsService.GetCombinedTerms(v.SeTerm, v.ExtractedTerms),
                CameFrom = _visitsService.GetCameFrom(v),
                PageTitle = _visitsService.GetPageTitle(v),
                PageUrl = _visitsService.GetPageUrl(v)
            });
            return await flatVisits.ToListAsync();
            //return flatVisits.ToList();
        }

        // GET: api/Visits/session/5
        [HttpGet("session/{id}")]
        //public async Task<ActionResult<Visit>> GetVisitSession(Guid id)
        //public async Task<ActionResult<IEnumerable<IGrouping<Tuple<Device, Browser>, Visit>>>> GetVisitSession(Guid id)
        //public async Task<ActionResult<Dictionary<string, Dictionary<string, List<Visit>>>>> GetVisitSession(Guid id)
        public async Task<ActionResult<Dictionary<string, Dictionary<string, List<Visit>>>>> GetVisitSession(Guid id)
        {
            var visit = await _context.Visit.Include(v => v.IpAddress)
                .FirstOrDefaultAsync(v => v.Id == id);

            if (visit == null)
            {
                return NotFound();
            }
            //List<Visit> sessionVisits = _visitsService.GetVisitSession(visit);
            //IEnumerable<IGrouping<Tuple<Device, Browser>, Visit>> sessionVisits = await _visitsService.GetVisitSession(visit);
            Dictionary<string, Dictionary<string, List<Visit>>> sessionVisits = await _visitsService.GetVisitSession(visit);

            //var sessionVisitsList = sessionVisits.ToDictionary(g => g.Key.Item1.OperatingSystem, g => g.ToList()); 
            //return Ok(sessionVisitsList);
            return Ok(sessionVisits); 
        }

        // GET: api/Visits/sessionvisits/5
        [HttpGet("sessionvisits/{id}")]
        //public async Task<ActionResult<Dictionary<Tuple<string, string>, List<Visit>>>> GetVisitSessionOneLevelGrouping(Guid id)
        public async Task<ActionResult<List<VisitSessionBlock>>> GetVisitSessionOneLevelGrouping(Guid id)
        {
            var visit = await _context.Visit.Include(v => v.IpAddress)
                .FirstOrDefaultAsync(v => v.Id == id);

            if (visit == null)
            {
                return NotFound();
            }
            //Dictionary<Tuple<string, string>, List<Visit>> sessionVisits = await _visitsService.GetVisitSessionByDeviceAndBrowserPair(visit);
            List<VisitSessionBlock> sessionVisits = await _visitsService.GetVisitSessionByDeviceAndBrowserPair(visit);
            //var sessionVisitViewModels = sessionVisits.Select(v => )
            return Ok(sessionVisits);
        }

        // GET: api/Visits/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Visit>> GetVisit(Guid id)
        {
            var visit = await _context.Visit.FindAsync(id);

            if (visit == null)
            {
                return NotFound();
            }

            return visit;
        }

        // PUT: api/Visits/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutVisit(Guid id, Visit visit)
        {
            if (id != visit.Id)
            {
                return BadRequest();
            }

            _context.Entry(visit).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VisitExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Visits
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<Visit>> PostVisit(Visit visit)
        {
            _context.Visit.Add(visit);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetVisit", new { id = visit.Id }, visit);
        }

        // DELETE: api/Visits/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Visit>> DeleteVisit(Guid id)
        {
            var visit = await _context.Visit.FindAsync(id);
            if (visit == null)
            {
                return NotFound();
            }

            _context.Visit.Remove(visit);
            await _context.SaveChangesAsync();

            return visit;
        }

        private bool VisitExists(Guid id)
        {
            return _context.Visit.Any(e => e.Id == id);
        }
    }
}
